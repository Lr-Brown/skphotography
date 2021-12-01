import styled from "styled-components"
import { motion } from "framer-motion"
import photo from "../../icons/photo.svg"

export const SDesktop = styled.div`
  display: none;
  width: 100%;
  top: 0;
  height: 100%;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`
export const SNavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 8px;
  height: 13vh;
  width: 100%;
  justify-content: space-between;
`

export const SImage = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  img {
    cursor: pointer;
    object-fit: contain;
    max-height: 100%;
    width: auto;
    height: auto;
  }
`
export const STabSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: center;
`
export const STab = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 150px;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-image: ${(props) => (props.selected ? `url(${photo})` : `none`)};
  background-repeat: no-repeat;
  background-position: center;
  p {
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    margin: 12px;
    margin-top: 18px;
    text-align: center;
    display: flex;
    padding: 4px;
  }
`

export const SContactLine = styled.div`
  font-size: 1.5vw;
  font-weight: bold;
  display: flex;
`

export const SMobileMenu = styled.div`
  display: flex;
  flex: 1;
  position: fixed;
  top: 8px;
  right: 8px;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
`

export const SMobileImg = styled.img`
  max-width: 230px;
  max-height: 100%;
  width: auto;
  height: auto;
`
export const SMobile = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 1023px) {
    display: flex;
  }
`
