import styled from 'styled-components'

/* eslint-disable-next-line */
export interface SidebarProps {}

const StyledSidebar = styled.aside`
  color: pink;
`

export function Sidebar(props: SidebarProps) {
  return (
    <StyledSidebar>
      <h1 data-testid="sidebar">Welcome to Sidebar!</h1>
    </StyledSidebar>
  )
}

export default Sidebar
