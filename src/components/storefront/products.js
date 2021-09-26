import React from 'react';
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { decrementRemoteData, loadingToggleAction } from '../../store/actions';
import Loader from './loader.js'
// import Carousel from 'react-img-carousel';

// require('react-img-carousel/lib/carousel.css');

import ImageGallery from 'react-image-gallery';
import banner from '../../assets/banner-img4.jpeg'
import banner2 from '../../assets/banner-img2.jpeg'
import banner3 from '../../assets/banner-img6.jpeg'
const images = [
  {
    original: banner,
  },
  {
    original: banner2,
  },
  {
    original: banner3,
  },
];


 
// import { useEffect } from 'react'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 30,
  },
  media: {
    height: 140,
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  },
  button: {
    background: 'linear-gradient(45deg, #83004A 30%, #ECE7EA 98%)',
    color: 'white',
    padding: '7px'
  },
  link: {
    textDecoration: 'none',
  },
  linkButton: {
    color: 'black',
    background: '#ededed',
    border: 'none'
  },
  cardActionArea: {
    "&:hover": {
      background: 'transparent',
    }
  }
});



const Products = props => {

  const classes = useStyles();


  return (
    <>
    <section>
      <ImageGallery items={images} 
        showThumbnails={false}
        showFullscreenButton={false}
        showBullets={true}
        autoPlay={true}
        />
    </section>
    <Typography  className="page-header" variant="h2" gutterBottom>{props.activeCategory.toUpperCase() || 'Bestsellers'}</Typography>
    { props.showLoading && <Loader/> }
    <ul>
      <Grid
        container spacing={1}
        className={classes.gridContainer}
        justify="center"
      >
        {props.data.map(product => {
          if(product.inStock <= 0) return;
          if(props.activeCategory !== '' && product.category !== props.activeCategory) return;
          return(
            <li key={product.name}>
              <Grid item lg={12}>
                <Card className={classes.root}>
                  <CardActionArea className={classes.cardActionArea}>
                    <CardMedia className={classes.media} image={product.url} title={product.name} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                        {product.name.toUpperCase()}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {product.miniDescription}
                      </Typography>
                      <NavLink className={classes.link}
                      to={{
                        pathname: `/details/${product._id}`,
                        state: product
                      }}>
                        <Button className={classes.linkButton} variant="outlined" size="small">Details</Button>
                    </NavLink>
                    </CardContent>
                    <CardContent>
                      {/* <p>In stock: {product.inStock}</p> */}
                      <p className="price-tag">${product.price}.00</p>
                    </CardContent> 
                  </CardActionArea>
                  <CardActions>
                    <Button className={classes.button} size="small" color="primary" onClick={() => {
                      props.decrementRemoteData(product)
                      props.addItemToCart(product)
                    }}>
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </li>
          )
        })}
      </Grid>
    </ul>
    </>
  )
}

const mapStateToProps = state => ({
  data: state.products.products,
  showLoading: state.products.showLoading
})

const mapDispatchToProps = {
  decrementRemoteData,
  loadingToggleAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

