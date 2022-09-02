import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51ItTdwSAfqeFeWnIogZNXiQvrnw6nPSLnb89o9PAeB1nZv6a3ClBemEPbIWdXDCVn7wAQcp3iipNEjGLgDuxUgCA00yKeEYbRa"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubsribe();
    };
  }, []);
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/payments">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
