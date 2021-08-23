import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText, Avatar, Button } from '@material-ui/core'
import { incrementRemoteData } from '../../store/actions'
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  avatar:{
    marginRight: '10px'
  }
}));

const SimpleCart = props => {
  const classes = useStyles();

  if(props.totalItems === 0) {
    return null
  }

  return (
    <>
      <section className="simple-cart">
        {props.cart.map(product => 
          <div key={`cart${product.name}`} className={classes.root}>
            <List component="nav" aria-label="secondary" >
              <ListItem button>
                <Avatar alt={product.name} src={product.url} className={classes.avatar} />
                <ListItemText primary={product.name} secondary={product.total} />
                {/* <IconButton color="primary" edge="end" aria-label="delete" > */}
                    <RemoveCircleOutlineRoundedIcon style={{ fontSize: 30  }}  onClick={() => {
                    props.incrementRemoteData(product)
                    props.removeItemFromCart(product)
                  }}/>
                {/* </IconButton> */}
              </ListItem>
            </List>
          </div>
          )}
           <NavLink className="checkout-btn-from-simplecart"  to="/cart">View Bag and Checkout</NavLink>
      </section>
    </>
  )
}

const mapStateToProps = state => ({
  totalItems: state.cart.totalItems,
  cart: state.cart.cart
})

const mapDispatchToProps = { incrementRemoteData }

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart)
