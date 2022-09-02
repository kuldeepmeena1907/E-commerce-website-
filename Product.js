import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    const price1 = parseInt(price);

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price1,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="main">
        <p className="tit">{title}</p>
        <p className="product_info">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p className="icon">
                <StarIcon />
              </p>
            ))}
        </div>
      </div>

      <img src={image} />
      <button onClick={addToBasket} className="btn">
        Add To Cart
      </button>
    </div>
  );
}
export default Product;
