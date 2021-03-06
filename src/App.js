import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './containers/Home/home';
import About from './containers/About/about';
import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App-header">
          <Header />
        </div>
        {/* <div className="container-fluid " style ={{marginTop:"20px"}} > 
        <CarouselPage></CarouselPage>
        </div> */}
        <Switch>
          <Route exact path="/home.js" component={Home} />
          <Route exact path="/about.js" component={About} />
        </Switch>
      </Router>   
      <Footer/>
    </React.Fragment>

  ); 
}

export default App;
