import {
  SCategories,
  SCategoryItem,
  SCategoryItemUnderline,
  SScreenShot,
  SServices,
  SSlideShow,
  SHeading,
  SDescription,
} from "./styles"
import { photos } from "../../libs/assets/services"
import * as SVG from "../../libs/icons/index"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const ServicesView = () => {
  const [currCategory, setCategory] = useState("Events")
  const [index, setindex] = useState(0)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "100%",
      }}
    >
      <SDescription>
        <SHeading>SHARON KATRICE PHOTOGRAPHY, LLC</SHeading>
        With a strong commitment to customer satisfaction, I am proud to offer a
        range of options <br /> to fit your budget and photography needs. Sharon
        Katrice Photography is focused on <br />
        capturing memories that will last a lifetime.
      </SDescription>
      <SServices>
        <SCategories>
          {Object.keys(photos).map((category) => (
            <button>
              <SCategoryItem
                active={category === currCategory}
                onClick={() => {
                  setCategory(category)
                  setindex(0)
                }}
              >
                {category}
                <SCategoryItemUnderline
                  initial={{ scaleX: 0 }}
                  animate={
                    category === currCategory ? { scaleX: 1 } : { scaleX: 0 }
                  }
                />
              </SCategoryItem>
            </button>
          ))}
        </SCategories>
        <SSlideShow>
          <motion.button
            onClick={() =>
              setindex(
                index === 0 ? photos[currCategory].length - 1 : index - 1
              )
            }
          >
            <SVG.Arrow size={"40px"} />
          </motion.button>
          <AnimatePresence initial={false}>
            <SScreenShot
              src={photos[currCategory][index]}
              key={photos[currCategory][index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
          <motion.button
            onClick={() => setindex((index + 1) % photos[currCategory].length)}
          >
            <SVG.Arrow previous size={"40px"} />
          </motion.button>
        </SSlideShow>
      </SServices>
    </motion.div>
  )
}

export default ServicesView
