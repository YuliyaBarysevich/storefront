import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import { decrementRemoteData } from '../../store/actions';
import { addItemToCart } from '../../store/actions';

import Loader from '../storefront/loader';

import Carousel from 'react-img-carousel';

require('react-img-carousel/lib/carousel.css');

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: 'auto'
  },
  media: {
    height: 300,
    margin: 20
  }
});

const ProductDetails = props => {
  const classes = useStyles();

  if(props.data.length === 0){
    return(
      <Loader />
    )
  }

  let singleProduct = props.data.find(product => product._id === props.location.state._id);

  if(!singleProduct){
    return(
      <>
      <h1>Product Not Found</h1>
      </>
    )
  }

  return (
    <>
      <Typography className="page-header" variant="h2" gutterBottom>{singleProduct.name.toUpperCase()}</Typography>
      <section className="product-details-wrapper">
        <Card className={classes.root} display="flex">
          {/* <CardMedia
          className={classes.media}
          image={singleProduct.url2} /> */}
          <Carousel viewportWidth="100"  viewportHeight="100" slideHeight="500px" slideWidth="100%"  cellPadding={ 5 }>
        <img src={singleProduct.url}/>
        <img src={singleProduct.url2}/>
        <img src={singleProduct.url3}/>
      </Carousel>
          
          <CardContent>
            <div className="details-wrapper">
              <Typography gutterBottom variant="h5" component="h2">
                In Stock: {singleProduct.inStock}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                ${singleProduct.price}.00
              </Typography>
            </div>
            <section className="details-purchase-wrapper">
              <Button
                className="details-buy-btn"
                display="flex"
                variant="contained"
                color="primary"
                disableElevation
                onClick={() => {
                  props.decrementRemoteData(singleProduct)
                  props.addItemToCart(singleProduct)
                }}
              >
                Add to Cart
              </Button>
              <Typography variant="h4" gutterBottom>Product Details</Typography>
              <Typography variant="body1" gutterBottom>{singleProduct.description}</Typography>
            </section>
          </CardContent>
        </Card>
      </section>
    </>
  )
}

const mapStateToProps = (state) => ({
  data: state.products.products
})

const mapDispatchToProps = { decrementRemoteData, addItemToCart }

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
