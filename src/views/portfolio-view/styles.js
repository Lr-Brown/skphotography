import styled from "styled-components"
import { motion } from "framer-motion"

export const SBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: 16px;
  justify-content: center;
  flex: 1 1 auto;
  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`
export const SImg = styled(motion.img)`
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
  border-radius: 4px;
`

export const SThumbNail = styled(motion.div)`
  border-radius: 4px;
  display: flex;
  padding: 16px;
  transition: all 0.2s ease-in-out;
  .after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    color: #fff;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    a {
      color: white;
    }
  }
  :hover {
    .after {
      display: flex;
      background: rgba(0, 0, 0, 0.75);
    }
    transform: scale(1.02);
  }
`

export const SOverlay = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.85);
  top: 0px;
  left: 0px;
`

export const SGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50% 50%;
  height: 90vh;
  width: 100vw;
`

export const SGridItem = styled(motion.div)`
  border-radius: 4px;
  padding: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  img {
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
    border-radius: 4px;
    object-fit: contain;
  }
`
export const SCancel = styled(motion.div)`
  padding: 8px;
  display: flex;
  height: 10vh;
  width: 100vw;
  justify-content: end;
`
