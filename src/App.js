import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Register from './Register';
import Footer from './Footer';
import Orders from './Orders';
import Footer2 from './Footer2';
import ScrollArrow from './ScrollArrow';

const promise = loadStripe('pk_test_51JLGU8CyjB9mcfPY5mALfHRBEkFop8bjFOpscZwRGuD8OPG5PFCt53WcV3tToy7fqKaB9UhOKzzSJt8iMUSQVXma00nTXbsAC5');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <ScrollArrow />
            <Footer />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <ScrollArrow />
            <Footer />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
            <ScrollArrow />
            <Footer />
          </Route>

           <Route path="/">
            <Header />
            <Home />
            <ScrollArrow />
            <Footer />
          </Route>
        </Switch>
    </div>
    </Router> 
  );
}

export default App;
