import React from 'react'

/** style */
import * as El from './ListItem.style'

const ListItem = ({items}) => {

  return (
    <El.ListContainer>
      {items.map((item, index) => (
        <El.ListItem key={index}>
          <p>Company: {item.company.name} <a href={item.applyUrl} target="_blank">Link</a></p>
          <p>Job: {item.title}</p>
        </El.ListItem>
      ))}
    </El.ListContainer>
  )
}

export default ListItem