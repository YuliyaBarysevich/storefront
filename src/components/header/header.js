import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box'
import logo from '../../assets/store-logo.png'

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
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
      <div style={{ width: '100%' }}>
        <Box boxShadow={3} display="flex" p={1} bgcolor="background.paper">
          <Box p={1} flexGrow={1} >
            <NavLink to="/">
              <img src={logo} alt="Logo" className="logo"/>
            </NavLink>
            <h1>
              <NavLink className="navLink"  to="/">I am so tired to build this App</NavLink>
            </h1>
          </Box>
          {/* <Box p={1}>

          </Box> */}
          <Box p={1} >
            <NavLink className="navLink"  to="/cart">
              <StyledBadge badgeContent={props.totalItems} color="secondary">
                <LocalMallIcon style={{ fontSize: 30 }}/>
              </StyledBadge>
            </NavLink>
          </Box>
        </Box>
      </div>
      
    </>

    // <div className={classes.root}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h2" className={classes.title}>
    //         Cool Store
    //       </Typography>
    //       <p>
    //         <NavLink className="navLink"  to="/cart"> Cart ({props.totalItems})</NavLink>
    //       </p>
    //     </Toolbar>
    //   </AppBar>
    // </div>
  );
};

const mapStateToProps = state => ({
  totalItems: state.cart.totalItems
})

export default connect(mapStateToProps)(Header);