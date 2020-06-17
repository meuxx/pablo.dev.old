import React from 'react'

const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="gatsby-plugin-fathom"
      src="https://haddock.pablo.dev/script.js"
      included-domains="pablo.dev"
      site="XMVFXWIR"
      defer
    />,
  ])
}

export { onRenderBody }
