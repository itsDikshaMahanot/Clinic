import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './containers/Home/home';
import About from './containers/About/about';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App-header">
          <Header />
        </div>
        <Switch>
          <Route path="/home.js" component={Home} />
          <Route path="/about.js" component={About} />
        </Switch>
      </Router>
    </React.Fragment>

  ); 
}

export default App;
