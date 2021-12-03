import styled from "styled-components"

export const SPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  img {
    object-fit: contain;
    max-width: 75%;
    max-height: 100%;
    width: auto;
    height: auto;
    border-radius: 8px;
  }
`
export const SQuote = styled.div`
  font-size: var(--body1);
  margin-top: 8px;
  margin-bottom: 4px;
  text-align: center;
`

export const SHeader = styled.h1`
  font-size: var(--title1);
  font-weight: bold;
  margin-bottom: 8px;
  font-style: italic;
  text-align: center;
`
export const SText = styled.b`
  font-size: var(--body1);
  text-align: center;
`

export const SAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 16px;
  align-items: center;
  max-height: 100%;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`
export const SInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SOther = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 20%;
  path {
    fill: var(--primaryColor);
  }
`
export const SCertified = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  color: var(--primaryColor);
  font-weight: 600;
  font-size: var(--body1);
  width: 50%;
  svg {
    max-width: 100%;
    max-height: 50%;
  }
`
