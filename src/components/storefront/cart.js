// import React from 'react';
// import { connect } from 'react-redux';
// import { removeItem } from '../../store/cart.js'
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';

// const SimpleCart = props => {

//   const useStyles = makeStyles({
//     root: {
//       maxWidth: 400,
//       minWidth: 300,
//       float: 'right'
//     }
//   })

//   const classes = useStyles();
//   if(props.cartArr.length > 0){
//     return(
//       <>
//         <Card className={classes.root}>
//           <CardContent>
//             <List>
//             {props.cartArr.map(item => {
//                 return (
//                   <ListItem key={item.name}>
//                     <ListItemText
//                       primary={item.name}
//                     />
//                     <ListItemSecondaryAction>
//                       <IconButton onClick={() => props.removeItem(item)} color="secondary" edge="end" aria-label="delete">
//                         <DeleteIcon />
//                       </IconButton>
//                     </ListItemSecondaryAction>
//                   </ListItem>
//                 )
//               })}
//             </List>
//           </CardContent>
//         </Card>
//       </>
//     )
//   } else {
//     return(
//       <>
//       </>
//     )
//   }

// }

// const mapStateToProps = (state) => {
//   return{
//     cartArr: state.cartArr.cartArr,
//     count: state.cartArr.count
//   }
// }

// const mapDispatchToProps = {
//   removeItem
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart)