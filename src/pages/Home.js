import React from 'react'
import { useQuery } from '@apollo/react-hooks'

/** queries */
import GET_JOBS from 'graphql/queries/getJobs.graphql'

/** components */
import SubSection from 'components/SubSection/SubSection'
import ListItem from 'components/ListItem/ListItem'

const Home = () => {
  
  const {
    loading,
    error,
    data
  } = useQuery(
    GET_JOBS, 
    { variables: '' },
    { fetchPolicy: 'cache-and-network' }
  )
  
  
  if (loading) return <h2>Loading...</h2>
  if (error) return <p>ERROR: {error.message}</p>

  return (
    <>
      <SubSection />
      <ListItem items={data.jobs} />
    </>
  )     
}

export default Home