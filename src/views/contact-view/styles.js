import styled from "styled-components"

export const SBody = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: var(--title1);
    align-self: center;
    color: var(--primaryColor);
  }
`

export const SForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4px;
  aspect-ratio: 1/1;
  padding: 16px;
  span {
    font-size: var(--body1);
    color: var(--primaryColor);
  }
  textarea {
    padding: 4px;
    border: solid 4px var(--primaryColor);
    outline: none;
    border-radius: 8px;
    width: 100%;
    height: 250px;
    font-size: var(--body1);
  }
  button {
    background-color: var(--primaryColor);
    border-radius: 8px;
    padding: 8px;
    color: white;
    font-size: var(--body1);
  }
`
export const STextInput = styled.input`
  font-size: var(--body1);
  background-color: white;
  border-radius: 8px;
  border: solid 4px var(--primaryColor);
  margin: 4px;
  padding: 8px;
  outline: none;
`

export const SRow = styled.div`
  display: flex;
  flex-direction: row;
`
