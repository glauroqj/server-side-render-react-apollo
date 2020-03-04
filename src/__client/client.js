import React from 'react'
import { hydrate, render } from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
/** apollo */
import { ApolloProvider } from '@apollo/react-common'

import Layout from '../routes/Layout'
/** style */
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { GlobalStyle, Theme } from 'assets/style'

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

const rootElement = document.getElementById('root')

console.log('< ROOT ELEMENT > ', rootElement, rootElement.hasChildNodes)

if (rootElement.hasChildNodes) {
  hydrate(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Reset />
          <Layout />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>,
    rootElement
  )
} else {
  render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Reset />
          <Layout />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>,
    rootElement
  )
}
