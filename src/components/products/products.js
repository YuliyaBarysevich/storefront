// import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import IconButton from '@material-ui/core/IconButton';

// import { connect } from 'react-redux'; 

// import { inactive, active } from '../../store/categories.js';
// import { getItems } from '../../store/products.js'

// const displayProducts = props => {
//   return (
//     <>
//       <Typography variant="h2" component="h2">Products</Typography>
//       <Button onClick={() => props.active('Electronics')}>Electronics</Button>
//       <Button onClick={() => props.active('Food')}>Food</Button>
//       <Grid container justify="center" spacing={5}>
//         {console.log(props)}
//         {props.items.listOfItems.map((item) => {
//           if (item.category === props.activeCategory) {
//             return (
//               <Grid>
//                 <Card>
//                   <CardHeader title={item.name} />
//                   <CardContent>
//                     <Typography component="p">$ {item.price}</Typography>
//                   </CardContent>
//                   <CardActions>
//                     <IconButton>Add to cart</IconButton>
//                     <IconButton>View details</IconButton>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             )
//           } else {
//             return null;
//           }
//         })}
//       </Grid>
//     </>
//   );
// }

// const mapStateToProps = state => {
//   return { items: state.items, activeCategory: state.categories.activeCategory }
// }

// const mapDispatchToProps = {
//   inactive,
//   active,
//   getItems
// }

// export default connect(mapStateToProps, mapDispatchToProps)(displayProducts);
