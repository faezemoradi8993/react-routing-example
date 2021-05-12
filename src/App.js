
import './App.css';
import React from 'react';
import About from "./About.js" ;
import Nav from "./Nav";
import Shop from "./Shop" ;
import Home from "./Home";
import Itemdetails from "./Itemdetails"
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/shop/:id" component={Itemdetails} />
          </Switch>
        
      </div>
    </Router>
  );
}

export default App;
