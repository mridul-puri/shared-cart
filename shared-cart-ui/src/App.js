import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SharedCart from './components/SharedCart'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import PersonalCart from './components/PersonalCart';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/personalcart">
            <PersonalCart />
          </Route>
          <Route exact path="/sharedcart">
            <SharedCart />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/r/*" component={SharedCart}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
