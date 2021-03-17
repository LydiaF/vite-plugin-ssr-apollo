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
  const {data, loading} = useQuery(LIST_COUNTRIES)

  return (
    <div>
      {loading && <p>App</p>}
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  )
}

export default App
