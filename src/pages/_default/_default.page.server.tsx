import React from 'react'
import { html } from 'vite-plugin-ssr'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { ApolloProvider } from '@apollo/client'

export const render = ({ contextProps }) => {
  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite App</title>
      </head>
      <body>
        <div id="root">${html.dangerouslySetHtml(contextProps.pageHtml)}</div>
      </body>
    </html>`
}

export const addContextProps = async ({ Page, contextProps, pageProps }) => {
  let pageHtml
  let initialApolloState

  const App = (
    <ApolloProvider client={contextProps.client}>
      <Page {...pageProps} />
    </ApolloProvider>
  )

  await getDataFromTree(App).then((_pageHtml) => {
    initialApolloState = contextProps.client.extract()
    pageHtml = _pageHtml
  })

  return { pageHtml, initialApolloState }
}

export const setPageProps = ({ contextProps: { initialApolloState } }) => {
  return { initialApolloState }
}
