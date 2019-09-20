import React from 'react'
// import PropTypes from 'prop-types'

const Html = ({content, state}) => (
  <html>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      
      <script async src="client.bundle.js" />

      <script dangerouslySetInnerHTML={{
        __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')}`,
      }} />

    </body>
  </html>
)

export default Html