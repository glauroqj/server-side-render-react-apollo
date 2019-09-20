import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'

/** queries */
import GET_REPOSITORIES from 'graphql/queries/getRepositories.graphql'

const Home = () => {
  
  const {
    loading,
    error,
    data
  } = useQuery(GET_REPOSITORIES, {
    variables: { number_of_repos: 15 }
  })
  
  if (loading) return <h2>Loading...</h2>

  return (
    <>
      <h1>HOME</h1>
      <ul>
        {data.viewer.repositories.nodes.map(item => (
          <li key={item.name}>{item.name} - {item.url}</li>
        ))}
      </ul>
    </>
  )
}

export default Home