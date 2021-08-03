import styled from 'styled-components'

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.header`
  color: pink;
  background-color: #143055;
  color: white;
  padding: 5px;
  border-radius: 3px;
`

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <h1>BYONDXR</h1>
    </StyledHeader>
  )
}

export default Header
