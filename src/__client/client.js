import React from 'react'
import { hydrate } from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
/** apollo */
import { ApolloProvider } from '@apollo/react-common'

import Layout from '../routes/Layout'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  link: createHttpLink({
    uri: `${process.env.BASE_URL}`,
    credentials: 'same-origin',
    headers: {
      authorization: `${process.env.AUTH}`,
    },
    fetch: fetch
  }),
  ssrForceFetchDelay: 100
})

hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider>
        <CSSReset />
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
