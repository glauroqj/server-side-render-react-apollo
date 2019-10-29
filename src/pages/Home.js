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
    <>
      {data.jobs.map(item => (
        <div>
          <p>Company: {item.company.name} <a href={item.applyUrl} target="_blank">Link</a></p>
          <p>Job: {item.title}</p>
        </div>
      ))}
    </>
  )     
}

export default Home