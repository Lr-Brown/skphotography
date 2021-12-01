import styled from "styled-components"
import { motion } from "framer-motion"

export const SDescription = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  max-width: 75%;
  color: var(--primaryColor);
  font-weight: 600;
  font-size: var(--headline);
  flex-direction: column;
`
export const SHeading = styled.h1`
  font-size: var(--title1);
  color: var(--primaryColor);
`

export const SServices = styled.div`
  display: flex;
  flex-direction: row;
  flex: 5;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const SCategories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 16px;
  button {
    padding: 0;
  }
`
export const SCategoryItem = styled.div`
  font-size: var(--title1);
  margin: 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
export const SCategoryItemUnderline = styled(motion.div)`
  width: 100%;
  height: 6px;
  background-color: var(--primaryColor);
`

export const SScreenShot = styled(motion.img)`
  max-width: 100%;
  height: 85%;
  width: auto;
  grid-area: 1/2/1/3;
  object-fit: contain;
  justify-self: center;
  align-self: center;
`

export const SSlideShow = styled.div`
  display: grid;
  margin: 0px 16px;
  grid-template-columns: 48px 1fr 48px;
  column-gap: 8px;
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;
`
