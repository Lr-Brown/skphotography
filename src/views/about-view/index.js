import {
  SAbout,
  SCertified,
  SHeader,
  SOther,
  SPhoto,
  SQuote,
  SText,
  SInfo,
} from "./styles"
import * as Icons from "../../libs/icons"
import { motion } from "framer-motion"

const AboutView = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <SAbout>
        <SPhoto>
          <img src={"/images/sharon.jpg"} alt="Me!" />
          <SQuote>
            <em>
              "The best way to capture moments is to pay attention. <br />
              This is how we cultivate mindfulness."
            </em>
            <br />
            -Jon Kabat-Zin
          </SQuote>
        </SPhoto>
        <SInfo>
          <SHeader> Meet Sharon Katrice Brown</SHeader>
          <SText>
            A lifelong hobby that has become a profession, Sharon Katrice
            Photography is the culmination of a dream, self-confidence, and
            determination. My personal journey with mindfulness has helped me
            gain the confidence and motivation needed to bring this business
            venture to fruition.
          </SText>
          <SText>
            I’ve been taking pictures since elementary school--always the one
            with the camera snapping pics and documenting memories throughout
            the years. I was blessed with the gift of making others smile and
            feel comfortable in front of the camera. After capturing your
            memories, I enjoy creating personalized keepsakes.
          </SText>
          <SText>
            A believer of Jesus Christ, I currently reside in the Overbrook
            section of Philadelphia with my husband of 22 years. I am the proud
            mother of three amazing young adults and three adorable fur babies.
          </SText>
          <SOther>
            <SCertified>
              <Icons.Certifcation size="100%" />
              Certified in Digital Imaging Proficiency
            </SCertified>
            <SCertified>
              <Icons.Camera size="100%" />
              Shoot with Cannon 80D
            </SCertified>
          </SOther>
        </SInfo>
      </SAbout>
    </motion.div>
  )
}

export default AboutView
