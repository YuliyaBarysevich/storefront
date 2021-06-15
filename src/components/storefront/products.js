import React from 'react';
import { withRouter, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux'; 
import { useEffect } from 'react'

import { inactive, active } from '../../store/categories.js';
import { getItems } from '../../store/products.js'
import { getRemoteData } from '../../store/products.js'
import { addItem } from '../../store/cart.js'

const displayProducts = props => {

  useEffect(() => {
    props.getRemoteData();
  }, []);

  const useStyles = makeStyles({
    gridItem: {
      margin: '40px'
    }
  })

  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" component="h4">Browse Categories</Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button onClick={() => props.active('Electronics')}>Electronics</Button>
        <Button onClick={() => props.active('Food')}>Food</Button>
      </ButtonGroup>
      <Grid container justify="center" spacing={1}>
        {console.log(props.items.listOfItems)}
        {props.items.listOfItems.map((item) => {
          if (item.category === props.activeCategory.toLowerCase()) {
            return (
              <Grid item lg={4} className={classes.gridItem}>
                <Card>
                  <CardHeader title={item.name} />
                  <CardContent>
                    <Typography component="p">$ {item.price}</Typography>
                    <Typography component="p">In Stock: {item.inStock}</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton onClick={() => props.addItem(item)}>Add to cart</IconButton>
                    <Link to={{
                      pathname: `/details/${item._id}`,
                      state: item,
                    }}>
                    <IconButton>View details</IconButton>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            )
          } else {
            return null;
          }
        })}
      </Grid>
    </>
  );
}

const mapStateToProps = state => {
  return { items: state.items, activeCategory: state.categories.activeCategory }
}

const mapDispatchToProps = {
  inactive,
  active,
  getItems,
  addItem,
  getRemoteData
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(displayProducts)
)

