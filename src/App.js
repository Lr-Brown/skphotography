import { useLocation, Route, Switch } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import HomeView from "./views/home-view"
import AboutView from "./views/about-view"
import ServicesView from "./views/services-view"
import ContactView from "./views/contact-view"
import NavBar from "./libs/components/navbar"
import { Scaffold } from "./libs/components/scaffold"

function App() {
  const location = useLocation()

  return (
    <Scaffold
      body={
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={HomeView} />
            {/* <Route path="/portfolio" component={PortfolioView} /> */}
            <Route path="/about" component={AboutView} />
            <Route path="/services" component={ServicesView} />
            <Route path="/contact" component={ContactView} />
          </Switch>
        </AnimatePresence>
      }
      navBar={<NavBar />}
    />
  )
}

export default App
