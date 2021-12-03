import {
  SNavBar,
  STab,
  STabSection,
  SImage,
  SMobileMenu,
  SMobile,
  SDesktop,
  SMobileImg,
  SMenu,
  SMobileTabSelection,
} from "./style"
import { useHistory, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import * as SVG from "../../icons/index"
import { motion } from "framer-motion"

const NavBar = () => {
  const location = useLocation()
  const history = useHistory()
  const [mobileMenu, setMenu] = useState(false)

  useEffect(() => {})
  const Tab = ({ label, path, mobile, index }) => (
    <motion.button
      animate={mobile ? { x: 0 } : {}}
      initial={mobile ? { x: "100%" } : {}}
      transition={{ duration: 0.5, delay: 0.3 * index }}
    >
      <STab
        selected={location.pathname === path}
        color={location.pathname !== path && !mobile ? "black" : "white"}
        onClick={() => {
          history.push(path)
          setMenu(false)
        }}
      >
        <p>{label}</p>
      </STab>
    </motion.button>
  )
  return (
    <SNavBar>
      <SDesktop>
        <SImage>
          <img
            src="/images/logo.png"
            alt="SkPhotogrphy Logo"
            onClick={() => {
              history.push("/")
            }}
            height="100%"
            width="100%"
          />
        </SImage>
        <STabSection>
          <Tab label="Home" path="/" />
          <Tab label="About me" path="/about" />
          {/* <Tab label="Portfolio" path="/portfolio" /> */}
          <Tab label="Services" path="/services" />
          <Tab label="Contact" path="/contact" />
        </STabSection>
      </SDesktop>
      <SMobile>
        <SMobileImg
          src="/images/logo.png"
          alt="SkPhotogrphy Logo"
          onClick={() => {
            history.push("/")
          }}
          width="1348"
          height="376"
        />
        <SMobileMenu onClick={() => setMenu(!mobileMenu)}>
          {mobileMenu ? <SVG.Cross size="32px" /> : <SVG.Menu size="32px" />}
        </SMobileMenu>

        {mobileMenu && (
          <>
            <SMenu onClick={() => setMenu(false)} />
            <SMobileTabSelection>
              <Tab label="Home" path="/" mobile index={0} />
              <Tab label="About me" path="/about" mobile index={1} />
              {/* <Tab label="Portfolio" path="/portfolio" /> */}
              <Tab label="Services" path="/services" mobile index={2} />
              <Tab label="Contact" path="/contact" mobile index={3} />
            </SMobileTabSelection>
          </>
        )}
      </SMobile>
    </SNavBar>
  )
}

export default NavBar
