import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Orders.css";
function Orders() {
  const history = useHistory();
  const red = () => {
    history.replace("/");
  };
  return (
    <div className="orders">
      <h1>Your Order was successfully Recieved</h1>
      <Button className="order_btn" onClick={red}>
        Go back to Home Page
      </Button>
    </div>
  );
}

export default Orders;
