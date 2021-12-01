import styled from "styled-components"

export const SPhoto = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  align-items: center;
  justify-content: center;
  img {
    display: flex;
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
    border-radius: 12px;
  }
`
export const SQuote = styled.b`
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
`
export const SText = styled.b`
  font-size: var(--body1);
  text-align: center;
`

export const SAbout = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: space-evenly;
  max-height: 100%;
`
export const SInfo = styled.div`
  max-width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-evenly;
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
