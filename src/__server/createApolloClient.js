/** core */
import React from 'react'
import fetch from 'node-fetch'
/** apollo */
import { ApolloProvider } from '@apollo/react-common'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { StaticRouter } from 'react-router'
import { InMemoryCache } from 'apollo-cache-inmemory'
/** style */
import Layout from '../routes/Layout'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { GlobalStyle, Theme } from 'assets/style'

const createApolloClient = (req, res, next) => {
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
          <GlobalStyle />
          <Reset />
          <Layout />
        </ThemeProvider>
      </StaticRouter>
    </ApolloProvider>
  )

  next()
}

export default createApolloClient