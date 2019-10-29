import Express from 'express'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import fetch from 'node-fetch'
import v8 from 'v8'
/** apollo */
import { ApolloProvider } from '@apollo/react-common'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { StaticRouter } from 'react-router'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getDataFromTree } from '@apollo/react-ssr'

import Html from './Html'
import Layout from '../routes/Layout'

/** styles */
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { GlobalStyle, Theme } from '../assets/style'
import { ServerStyleSheet } from 'styled-components'

const app = new Express()

app.use(Express.static('./build/client'))

app.use((req, res, next) => {

  res.apolloClient = new ApolloClient({
    ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    link: createHttpLink({
      uri: `${process.env.BASE_URL}`,
      credentials: 'same-origin',
      headers: {
        authorization: `${process.env.AUTH}`,
        cookie: req.header('Cookie'),
      },
      fetch: fetch
    }),
    cache: new InMemoryCache(),
  })

  const context = {}

  // The client-side App will instead use <BrowserRouter>
  res.App = (
    <ApolloProvider client={res.apolloClient}>
      <StaticRouter location={req.url} context={context}>
        <ThemeProvider theme={Theme}>
          <Reset />
          <GlobalStyle />
          <Layout />
        </ThemeProvider>
      </StaticRouter>
    </ApolloProvider>
  )

  next()
  // rendering code (see below)
})


app.use((req, res) => {
  const totalHeapSize = (v8.getHeapStatistics().total_available_size / 1024 / 1024 / 1024).toFixed(2)
  const totalHeapUsed = (v8.getHeapStatistics().used_heap_size / 1024 / 1024 / 1024).toFixed(2)
  console.info(`< NODE: TOTAL HEAP SIZE (GB ~${totalHeapSize}) | TOTAL USED (GB ~${totalHeapUsed}) >`)
  
  getDataFromTree(res.App)
  .then(() => {
    /* We are ready to render for real */
    const content = renderToString(res.App)
    /* prepare style on server */
    const sheet = new ServerStyleSheet()
    const styleTags = sheet.getStyleTags()

    const initialState = res.apolloClient.extract()
  
    const html = <Html
                  styles={styleTags}
                  content={content}
                  state={initialState}
                />
  
    res.status(200)
    res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`)
    res.end()
  })
  .catch(error => {
    console.warn('< GET DATA FROM TREE : ERROR > ', error)
    res.end()
  })

})

app.listen(process.env.PORT, process.env.HOST, () => console.log( // eslint-disable-line no-console
  `< SERVER RUNNING : PORT ${process.env.PORT} : HOST ${process.env.HOST} >`
))