import React from 'react';
import './CheckoutItem.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function CheckoutItem({id,title,image,price,rating}) { 

    const [{basket} , dispatch] = useStateValue();

    const removeFromBasket=()=>{

        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    };
    return (
        <div className="checkI">
            <img className="imgg" src={image} alt="" />
            <div className="infoI">
                <p className="check_t">{title}</p>
                <p className="price_c">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="rateI">
                  {
                    Array(rating)
                    .fill()
                    .map((_)=>
                    (
                        <p className="icon"><StarIcon/></p>
                    ))}
              </div>
              <button  className="btnI" onClick={removeFromBasket} >Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutItem
