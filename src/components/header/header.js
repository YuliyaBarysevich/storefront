import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box'
import logo from '../../assets/store-logo.png'

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  }
}))(Badge);


const Header = (props) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const classes = useStyles();

  return (
    <>
    <div className="top-header">
      <p>Enjoy free shipping on all orders with code FREESHIP. See terms ▸</p>
    </div>
      <div style={{ width: '100%' }} className="header">
        <div>
          <NavLink to="/">
            <img src={logo} alt="Logo" className="logo"/>
          </NavLink>
        </div>
        <div>
          <input className="search-input" placeholder="Search..." />
        </div>
        <div>
          <ul className="main-nav">
           <li>Find Store</li>
           <li>Gift Cards</li>
           <li>Sign in</li>
          </ul>
        </div>
        <div>
          <NavLink className="cart-link"  to="/cart">
            <StyledBadge badgeContent={props.totalItems} color="secondary">
              <LocalMallIcon style={{ fontSize: 30 }}/>
            </StyledBadge>
          </NavLink>
        </div>
      </div>
      
    </>
  );
};

const mapStateToProps = state => ({
  totalItems: state.cart.totalItems
})

export default connect(mapStateToProps)(Header);