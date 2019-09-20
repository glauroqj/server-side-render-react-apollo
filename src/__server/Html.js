import React from 'react'
// import PropTypes from 'prop-types'

const Html = ({styles, content, state}) => (
  <html>
    <head>
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