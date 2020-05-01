import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navigation from "./components/Navigation"

import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Blog from "./pages/blog"

const App = () => {
  return (
    <Router>
      <div>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
