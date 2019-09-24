import React from 'react'
import { useQuery } from '@apollo/react-hooks'

/** queries */
import GET_REPOSITORIES from 'graphql/queries/getRepositories.graphql'
/** components */
import {
  Flex,
  List,
  ListItem
} from '@chakra-ui/core'

const Home = () => {
  
  const {
    loading,
    error,
    data
  } = useQuery(GET_REPOSITORIES, {
    variables: { number_of_repos: 20 }
  })
  
  if (loading) return <h2>Loading...</h2>

  return (
    <Flex 
      w="100%"
      align="center"
      justifyContent="center"
      padding="5"
    >
      <List as="ol" styleType="decimal" spacing="3">
        {data.viewer.repositories.nodes.map(item => (
          <React.Fragment key={item.name}>
            <ListItem>
              {item.name} - {item.url}
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Flex>
  )
}

export default Home