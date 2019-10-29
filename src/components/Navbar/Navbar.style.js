import styled from 'styled-components'
import { c_secondary } from 'assets/style/colors'
import { Breakpoints } from 'assets/style'

export const Navbar = styled.div`
  display: flex;
  flex-directions: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${c_secondary};
  color: #fff;
  padding: 10px;

  @media ( max-width: ${ Breakpoints.xs } ) {
    padding: 0 32px;
  }
`

export const NavbarLogo = styled.h1`
  font-size: 1.8em;
`

export const NavbarMenu = styled.div`
  font-size: 1em;
`