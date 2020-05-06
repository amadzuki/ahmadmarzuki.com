import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Blog from "./pages/blog"
import BlogPost from "./pages/blogPost"

const App = () => {
  return (
    <Router>
      <div>
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
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:postTitle">
            <BlogPost />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
