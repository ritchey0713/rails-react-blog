import React, { Component } from 'react';


import { BrowserRouter  as Router, Route } from 'react-router-dom'


import Home from './containers/Home.js'
import Contact from './components/static/Contact.js'
import About from './components/static/About.js'
import PostForm from './containers/PostForm.js'
import PostShow from './components/PostShow.js'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path ='/posts/new' component={PostForm} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/posts/:id' component={PostShow} />

        </div>
      </Router>
)
  }
}

export default App
