import styled from 'styled-components'
import { c_main, c_secondary } from 'assets/style/colors'
import { Breakpoints } from 'assets/style'

export const Navbar = styled.div`
  display: flex;
  flex-directions: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${c_secondary};
  color: #fff;
  box-shadow: 0 3px 5px #cecece;

  @media ( max-width: ${ Breakpoints.xs } ) {
    padding: 0 32px;
  }
`

export const NavbarLogo = styled.h1`
  font-size: 1.8em;
  background-color: ${c_main};
  padding: 10px;
  transition: background-color 0.3s ease-out;

  & :hover {
    cursor: pointer;
    background-color: ${c_secondary};
    transition: background-color 0.3s ease-in;
  }
`

export const NavbarMenu = styled.div`
  font-size: 1em;
  padding: 10px;
`