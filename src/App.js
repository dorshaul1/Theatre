import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import { TheatreApp } from './views/TheatreApp/TheatreApp'
import { AuthPage } from './views/AuthPage'
import { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route component={TheatreApp} path='/' />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
