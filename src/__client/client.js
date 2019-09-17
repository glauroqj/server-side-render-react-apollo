import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
/** apollo */
import { ApolloProvider } from '@apollo/react-common'

import Layout from '../routes/Layout'

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  link: createHttpLink({
    uri: 'http://localhost:3000',
    credentials: 'same-origin',
    headers: {
      authorization: 'Bearer ',
      cookie: req.header('Cookie'),
    },
    fetch: fetch
  }),
  ssrForceFetchDelay: 100
})

hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
