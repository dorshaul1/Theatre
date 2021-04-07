import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { TheatreApp } from './views/TheatreApp/TheatreApp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={TheatreApp} path="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
