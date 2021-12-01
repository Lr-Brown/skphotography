import styled from "styled-components"

export const SBody = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`
export const SScaffold = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Scaffold = ({ body, navBar }) => {
  return (
    <SScaffold>
      {navBar}
      <SBody>{body}</SBody>
    </SScaffold>
  )
}
