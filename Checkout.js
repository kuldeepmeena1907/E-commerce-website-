import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutItem from "./CheckoutItem";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="check">
      <div className="left_c">
        <img
          className="ad"
          src="https://www.webtalentmarketing.com/wp-content/uploads/2017/10/amazon-profit_FACEBOOK.jpg"
          alt=""
        />
        {basket?.length == 0 ? (
          <div className="check_titkle">
            <h2>Your Cart is Empty</h2>
            <p>
              You have no items in your cart. To buy one or more items, Click on
              "Add to Cart"{" "}
            </p>
          </div>
        ) : (
          <div className="check_titkle">
            <h2 className="title">Your Cart</h2>
            {basket?.map((item) => (
              <CheckoutItem
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="right_c">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
