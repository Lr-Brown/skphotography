import {
  SNavBar,
  STab,
  STabSection,
  SImage,
  SMobileMenu,
  SMobile,
  SDesktop,
  SMobileImg,
} from "./style"
import { useHistory, useLocation } from "react-router-dom"
import { useEffect } from "react"
import * as SVG from "../../icons/index"

const NavBar = () => {
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {})
  const Tab = ({ label, path }) => (
    <button>
      <STab
        selected={location.pathname === path}
        onClick={() => {
          history.push(path)
        }}
      >
        <p>{label}</p>
      </STab>
    </button>
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
        <SMobileMenu>
          <SVG.Menu size="32px" />
        </SMobileMenu>
      </SMobile>
    </SNavBar>
  )
}

export default NavBar
