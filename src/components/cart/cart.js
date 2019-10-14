import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { setFalse } from '../../actions/flagAction'
import { startRemoveItem } from '../../actions/cartAction'

function Cart(props) {
    if (props.flag) {
        props.dispatch(setFalse())
    }

    let subTotal = 0
    props.cart.forEach(cart => {
        subTotal = subTotal + (cart.productId.price * cart.quantity)


    });
    const handleClick = (cartId) => {

        props.dispatch(startRemoveItem(cartId))
    }

    return (
        <div>
            {props.cart.map(cart => (<div key={cart._id}>
                <h3>{cart.productId.name}</h3>
                <Button type="danger" shape="round" icon="delete" size='small' onClick={() => { handleClick(cart._id) }}>

                </Button>
                <img />
                <p>total : {cart.productId.price}*{cart.quantity}={cart.productId.price * cart.quantity}</p>
            </div>))}
            <h3>Sub Total : {subTotal}</h3>
            <Button type="primary" shape="round" icon="shopping" size='small' onClick={() => { handleClick() }}>
                Checkout
                </Button>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        cart: state.cart,
        flag: state.flag
    }
}

export default connect(mapStateToProps)(Cart)