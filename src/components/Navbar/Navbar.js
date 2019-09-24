import React from 'react'

/** component */
import { Box } from '@chakra-ui/core'
/** style */
import * as El from './Navbar.style'


const Navbar = () => (
  <El.Navbar>
    <Box fontSize={['sm', 'md', 'lg', 'xl']}>Github Projects</Box>
  </El.Navbar>
)

export default Navbar