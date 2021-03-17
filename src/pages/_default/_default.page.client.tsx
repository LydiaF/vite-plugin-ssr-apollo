import ReactDOM from 'react-dom'
import React from 'react'
import { getPage } from 'vite-plugin-ssr/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const hydrate = async () => {
  const { Page, pageProps } = await getPage()

  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache().restore(pageProps.initialApolloState)
  })

  const renderMethod = import.meta.hot ? ReactDOM.render : ReactDOM.hydrate

  renderMethod(
    <ApolloProvider client={client}>
        <Page {...pageProps} />
    </ApolloProvider>
  , document.getElementById('root'))
}

hydrate()
