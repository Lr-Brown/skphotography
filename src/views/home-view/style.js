import styled from "styled-components"

export const SGallery = styled.div`
  width: 100%;
  display: none;
  padding: 16px;
  img {
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`
export const SMobile = styled.div`
  display: none;
  flex-direction: column;
  @media screen and (max-width: 1023px) {
    display: flex;
  }
`
