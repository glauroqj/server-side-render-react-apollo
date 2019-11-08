import styled from 'styled-components'

export const SubSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color.c_third};
  padding: ${props => props.theme.space[16]} ${props => props.theme.space[16]};
  color: #fff;
`
export const SubSectionTitle = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: ${props => props.theme.typography.fontSize[32]};
  padding: ${props => props.theme.space[8]} ${props => props.theme.space[8]};
`
export const SubSectionSubTitle = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: ${props => props.theme.typography.fontSize[18]};
`