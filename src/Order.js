import moment from 'moment';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './Order.css'

function Order({ order }) {
    return (
        <div className="order">
            <h2 className="order_order">Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

            <p className="order_id">
                <small>{order.id}</small>
            </p>

            {order.data.basket?.map(item => (
                <CheckoutProduct className="order_checkout"
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    rating={item.rating}
                    price={item.price}
                    hideButton
                />
            ))}

            <CurrencyFormat 
                renderText={(value) => (
                        <h3 className="order_total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order
