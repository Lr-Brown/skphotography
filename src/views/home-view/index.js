import { SGallery, SMobile } from "./style"
import { photos } from "../../libs/assets/homepage"
import Masonry from "react-responsive-masonry"
import { motion } from "framer-motion"

const HomeView = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SGallery>
        <Masonry columnsCount={3} gutter={16}>
          {photos.map((image, i) => (
            <motion.div
              initial={
                image.skb
                  ? { opacity: 1 }
                  : { opacity: 0, translateX: -50, translateY: -50 }
              }
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={
                image.skb ? {} : { duration: 0.7, delay: i * 0.05 + 0.6 }
              }
            >
              {image.src === "" ? (
                <div />
              ) : (
                <img src={image.src} style={{ borderRadius: "8px" }} alt="Hi" />
              )}
            </motion.div>
          ))}
        </Masonry>
      </SGallery>
      <SMobile>
        {photos.map((image, i) =>
          i === 0 ? null : (
            <img
              src={image.src}
              width="100%"
              style={{ marginBottom: "8px" }}
              alt=""
            />
          )
        )}
      </SMobile>
    </motion.div>
  )
}

export default HomeView
