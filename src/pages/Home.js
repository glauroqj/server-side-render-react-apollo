import React from 'react'
import { useQuery } from '@apollo/react-hooks'

/** queries */
import GET_JOBS from 'graphql/queries/getJobs.graphql'

const Home = () => {
  
  const {
    loading,
    error,
    data
  } = useQuery(GET_JOBS, {
    variables: ''
  })
  
  
  if (loading) return <h2>Loading...</h2>
  
  console.log('< QUERY > ', data)

  return (
    <div>HOME</div>
  )
}

export default Home