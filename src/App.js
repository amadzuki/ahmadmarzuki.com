import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Blog from './pages/blog'
import BlogPost from './pages/blogPost'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/blog' exact>
            <Blog />
          </Route>
          <Route path='/blog/:postTitle'>
            <BlogPost />
          </Route>
          <Route path='/resume'>
            <Redirect to='/Resume_Ahmad_Marzuki_v3.pdf'></Redirect>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
