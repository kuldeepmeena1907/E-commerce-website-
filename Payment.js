import React, { useState, useEffect } from "react";
import CheckoutItem from "./CheckoutItem";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { db } from "./firebase";
function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [client, setCLient] = useState(true);
  const history = useHistory();
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = stripe
      .confirmCardPayment(client, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });

    dispatch({
      type: "EMPTY_BASKET",
    });
  };

  useEffect(() => {
    const clientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setCLient(response.data.clientSecret);
    };

    clientSecret();
  }, [basket]);
  console.log(client);
  return (
    <div className="payments">
      <div className="payment_cont">
        <h1>
          checkout(
          <Link to="/checkout">{basket.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="pay_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Santhekkate</p>
            <p>Udupi 576105</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="pay_title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="pay_product">
            {basket.map((item) => (
              <CheckoutItem
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="pay_title">
            <h3>Payment Details</h3>
          </div>
          <div className="pay_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="price_cont">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={0}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
