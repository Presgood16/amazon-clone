import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, price, rating, image, hideButton}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            
            <img className="checkoutProduct_image" src={image} alt=""/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>&#11088;</p>
                    ))}
                </p>

                {!hideButton && (
                    <button className="checkoutProduct_remove" onClick={removeFromBasket}>Remove From Cart</button>
                )}
                
            </div>
        </div>
    )
}

export default CheckoutProduct
