import Express from 'express'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import fetch from 'node-fetch'
/** apollo */
import { ApolloProvider } from '@apollo/react-common'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { StaticRouter } from 'react-router'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getDataFromTree } from '@apollo/react-ssr'

import Html from './Html'

import Layout from '../routes/Layout'

const app = new Express()

app.use(Express.static('./build/client'))

app.use((req, res, next) => {

  res.apolloClient = new ApolloClient({
    ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    link: createHttpLink({
      uri: 'https://api.github.com/graphql',
      credentials: 'same-origin',
      headers: {
        authorization: 'Bearer  00f01ae36a430636740fdcc895b636ea6e5f18d2',
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
        <Layout />
      </StaticRouter>
    </ApolloProvider>
  )

  next()
  // rendering code (see below)
})


app.use((req, res) => {

  getDataFromTree(res.App).then(() => {
    // We are ready to render for real
    const content = renderToString(res.App)
    const initialState = res.apolloClient.extract()
  
    const html = <Html content={content} state={initialState} />
  
    res.status(200)
    res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`)
    res.end()
  })
  .catch(error => console.warn('< GET DATA FROM TREE : ERROR > ', error))

})

app.listen('3000', () => console.log( // eslint-disable-line no-console
  `app Server is now running on http://localhost:${3000}`
))