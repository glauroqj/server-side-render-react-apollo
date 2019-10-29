import React from 'react'
// import PropTypes from 'prop-types'

const Html = ({styles, content, state}) => (
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0" />
      <title>Server Side Render</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet"></link>
      
      <head dangerouslySetInnerHTML={{
          __html: styles
        }}/>
      <script async src="client.bundle.js" />
      <script dangerouslySetInnerHTML={{
        __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')}`,
      }} />
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
    </body>
  </html>
)

export default Html