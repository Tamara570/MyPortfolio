import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Contact from './components/contact/contact'
import Projects from './components/projects/projects'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>  
      </div>
    );
  }
}
  

export default App;
