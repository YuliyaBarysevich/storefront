import React from 'react';
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { decrementRemoteData, loadingToggleAction } from '../../store/actions';
import Loader from './loader.js'
import Carousel from 'react-img-carousel';

require('react-img-carousel/lib/carousel.css');


 
// import { useEffect } from 'react'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 30
  },
  media: {
    height: 140,
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});



const Products = props => {

  const classes = useStyles();


  return (
    <>
    {  props.showLoading && <Loader/> }
    <section>
      <Carousel viewportWidth="100"  viewportHeight="100" slideHeight="500px" slideWidth="100%"  cellPadding={ 5 } autoplay={true}>
        <img src='https://avatars.mds.yandex.net/get-zen_doc/127510/pub_5bb0e4fbfe7b2900aa92d32a_5bb0e667cfd97c00ab11e0ac/scale_1200'/>
        <img src='https://www.verywellhealth.com/thmb/9tcRWldBb8cMqDqkjVanPUZYT9I=/3000x2000/filters:fill(87E3EF,1)/gluten-free-makeup-brands-562443-primary-recirc-b8cf5ac52391436ba4114a6355aac323.jpg'/>
        <img src='https://dy6g3i6a1660s.cloudfront.net/Ao0dhnqOYl5Hu7HRDYXaPweoBLA/orig.jpg'/>
      </Carousel> 
    </section>
    <Typography className="page-header" variant="h2" gutterBottom>{props.activeCategory.toUpperCase() || 'Bestsellers'}</Typography>
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
                  <CardActionArea>
                    <CardMedia className={classes.media} image={product.url} title={product.name} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name.toUpperCase()}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {product.miniDescription}
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <p>In stock: {product.inStock}</p>
                      <p>Price: ${product.price}</p>
                    </CardContent> 
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => {
                      props.decrementRemoteData(product)
                      props.addItemToCart(product)
                    }}>
                      Add to Cart
                    </Button>
                    {/* <IconButton onClick={() => props.addItemToCart(product)}>Add to cart</IconButton> */}
                    <NavLink
                      className="navLink"
                      to={{
                        pathname: `/details/${product._id}`,
                        state: product
                      }}>
                        <Button size="small" color="primary">Details</Button>
                    </NavLink>
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

  // return (
  //   <>
  //     <Typography variant="h4" component="h4">Browse Categories</Typography>
  //     <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
  //       <Button onClick={() => props.active('Electronics')}>Electronics</Button>
  //       <Button onClick={() => props.active('Food')}>Food</Button>
  //     </ButtonGroup>
  //     <Grid container justify="center" spacing={1}>
  //       {console.log(props.items.listOfItems)}
  //       {props.items.listOfItems.map((item) => {
  //         if (item.category === props.activeCategory.toLowerCase()) {
  //           return (
  //             <Grid item lg={4} className={classes.gridItem}>
  //               <Card>
  //                 <CardHeader title={item.name} />
  //                 <CardContent>
  //                   <Typography component="p">$ {item.price}</Typography>
  //                   <Typography component="p">In Stock: {item.inStock}</Typography>
  //                 </CardContent>
  //                 <CardActions>
  //                   <IconButton onClick={() => props.addItem(item)}>Add to cart</IconButton>
  //                   <Link to={{
  //                     pathname: `/details/${item._id}`,
  //                     state: item,
  //                   }}>
  //                   <IconButton>View details</IconButton>
  //                   </Link>
  //                 </CardActions>
  //               </Card>
  //             </Grid>
  //           )
  //         } else {
  //           return null;
  //         }
  //       })}
  //     </Grid>
  //   </>
  // );
}

const mapStateToProps = state => ({
  data: state.products.products,
  showLoading: state.products.showLoading
})

const mapDispatchToProps = {
  decrementRemoteData,
  loadingToggleAction,
  // addItemToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

