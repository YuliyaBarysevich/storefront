// import React from 'react';
// import { connect } from 'react-redux';

// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

// import { addItem } from '../../store/cart.js'
// import { removeItem } from '../../store/cart.js'

// const ProductDetails = props => {

//   let singleItem = props.location.state;

//   return(
//     <>
//     <Card>
//       <CardHeader title={singleItem.name.toUpperCase()} />
//       <CardContent>
//         <Typography variant="body1">In Stock: {singleItem.inStock}</Typography>
//         <Typography variant="body1">Price: {singleItem.price} $</Typography>
//       </CardContent>
//       <CardActions>
//         <Button color="primary" variant="contained" onClick={() => props.addItem(singleItem)}>Buy</Button>
//       </CardActions>
//     </Card>
//     </>
//   )
// }

// const mapStateToProps = (state) => {
//   return{
//     cartArr: state.cartArr.cartArr
//   }
// }

// const mapDispatchToProps = {
//   removeItem,
//   addItem
// }



// export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)