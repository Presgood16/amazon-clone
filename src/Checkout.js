import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import AD from './images/adds.gif'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src={AD} alt=""/>

                <div className="checkout_container">
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Shopping Cart</h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
