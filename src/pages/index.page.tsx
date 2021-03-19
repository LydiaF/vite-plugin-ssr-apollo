import { gql, useQuery } from '@apollo/client'
import React from 'react'

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`

const App = () => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, {
    ssr: true, // default
  })

  if (loading) return <div>Loading</div>
  if (error) return <div>{JSON.stringify(error)}</div>

  return <div>{data && <pre>{JSON.stringify(data)}</pre>}</div>
}

export default App
