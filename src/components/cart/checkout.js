import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, Typography } from '@material-ui/core';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

import { removeItemFromCart, incrementRemoteData } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    overflow: 'scroll'
  },
  title: {
    marginTop: '20px'
  },
  bold: {
    fontWeight: 600,
    textAlign: 'right',
    width: '100%',
    fontSize: '19px'
  },
  button: {
    background: 'linear-gradient(45deg, #83004A 40%, #ECE7EA 99%)',
    color: 'white',
    padding: '10px 23px',
    fontSize: '17px',
    margin: '20px auto',
    display: 'block'
  },
  media: {
    width: '70px',
    height: '70px',
    marginRight: '20px'
  },
  link: {
    textDecoration: 'none',
    marginRight: '30px',
    color: 'black',
    "&:hover": {
      color: "grey",
    }
  },
  priceTag: {
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
        <Typography className={classes.title} gutterBottom variant="h4" component="h2">
            My Basket
          </Typography>
          <ul>
            {props.cart.map(product => {
              return(
                <li className="checkout-list" key={`${product._id}`}>
                  <div className="checkout-item">
                  <img className={classes.media} src={product.url} title={product.name} />
                    <NavLink className={classes.link}
                    to={{
                      pathname:`/details/${product._id}`,
                      state: product
                    }}>
                      <span>{product.name}</span>
                    </NavLink>
                    <span>Qty:{product.total}</span>
                  </div>
                  <div className="checkout-item">
                    <span>${individualProductPrice(product)}.00</span>
                    <HighlightOffRoundedIcon 
                    className={classes.priceTag}
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
            <p className={classes.bold}>Total: ${totalPrice}.00</p>
          </div>
          <div className="checkout=btn-wrapper">
            <Button
              className={classes.button}
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