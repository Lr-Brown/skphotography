import {
  SBody,
  SCancel,
  SGridItem,
  SGrid,
  SImg,
  SOverlay,
  SThumbNail,
} from "./styles"
import { portfolio } from "../../libs/assets/portfolio"
import { useState } from "react"
import { motion } from "framer-motion"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import * as Icons from "../../libs/icons/index"

const PortfolioView = () => {
  const [display, setDisplay] = useState(false)
  const [selImage, setImage] = useState("")
  return (
    <SBody>
      <AnimateSharedLayout type="crossfade">
        {Object.keys(portfolio).map((shoot) => (
          <SThumbNail
            onClick={() => {
              setDisplay(!display)
              setImage(shoot)
            }}
          >
            <div className="after">
              <h1>{shoot}</h1>
              <p> {portfolio[shoot]["description"]}</p>
            </div>
            <SImg
              src={portfolio[shoot]["thumbnail"]}
              alt={shoot}
              layoutId={shoot}
            />
          </SThumbNail>
        ))}
        {display && (
          <AnimatePresence exitBeforeEnter>
            <SOverlay>
              <SCancel>
                <motion.button
                  onClick={() => {
                    setDisplay(!display)
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Icons.Cross size={"48px"} />
                </motion.button>
              </SCancel>
              <SGrid>
                <SGridItem layout>
                  <SImg
                    src={portfolio[selImage]["thumbnail"]}
                    layoutId={selImage}
                    alt={"HI"}
                  />
                </SGridItem>
                <div />

                {portfolio[selImage]["otherPhotos"].map((src, index) => (
                  <SGridItem
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.05 * index }}
                  >
                    <SImg src={src} alt={"HI"} />
                  </SGridItem>
                ))}
              </SGrid>
            </SOverlay>
          </AnimatePresence>
        )}
      </AnimateSharedLayout>
    </SBody>
  )
}

export default PortfolioView
