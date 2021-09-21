import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, Avatar } from '@material-ui/core';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

import { removeItemFromCart, incrementRemoteData } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800
  },
  bold: {
    fontWeight: 600
  },
  avatar:{
    marginRight: '10px',
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  button: {
    marginLeft: '10px'
  }
}));

const Cart = props => {
  const classes = useStyles();

  const total = (cart) => {
    let cartTotal = 0
    for (let i = 0; i < cart.length; i++){
      cartTotal = (((cartTotal * 100) + ((cart[i].price * 100) * cart[i].total )) / 100)
    }
    return cartTotal;
  }
  let totalPrice = total(props.cart)

  function individualProductPrice(cartItem){
    return ((cartItem.price * 100) * (cartItem.total * 100) / 10000)
  }

  return (
    <React.Fragment>
      <section className="checkout-wrapper">
        <Card className={classes.root} display="flex">
          <ul>
            {props.cart.map(product => {
              return(
                <li className="checkout-list" key={`${product._id}`}>
                  <div className="checkout-item">
                    <NavLink className="navLink"
                    to={{
                      pathname:`/details/${product._id}`,
                      state: product
                    }}>
                      <span>{product.name.toUpperCase()}</span>
                    </NavLink>
                    <span>({product.total})</span>
                  </div>
                  <div className="checkout-item">
                    <span>${individualProductPrice(product)}</span>
                    <HighlightOffRoundedIcon 
                    className={classes.button}
                    onClick={() => {
                      props.incrementRemoteData(product)
                      props.removeItemFromCart(product)
                    }}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="checkout-list">
            <p>Total</p>
            <p className={classes.bold}>${totalPrice}</p>
          </div>
          <div className="checkout=btn-wrapper">
            <Button
              className="checkout-place-order-btn"
              display="flex"
              variant="contained"
              color="primary"
              disableElevation
            >
              PLACE YOUR ORDER
            </Button>
          </div>
        </Card>
      </section>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  totalItems: state.cart.totalItems,
  cart: state.cart.cart
})

const mapDispatchToProps = { incrementRemoteData, removeItemFromCart }

export default connect(mapStateToProps, mapDispatchToProps)(Cart)