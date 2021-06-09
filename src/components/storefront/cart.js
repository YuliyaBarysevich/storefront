import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../store/cart.js'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const SimpleCart = props => {
  

  return(
    <>
    <section>
    <List>
          <ListItem>
            <ListItemText
              primary="Shopping Cart"
            />
          </ListItem>
            {props.cartArr.map(item => {
              return (
                <ListItem key={item.name}>
                  <ListItemText
                    primary={item.name}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => props.removeItem(item)} color="secondary" edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })}
        </List>
    </section>
    </>
  )

}

const mapStateToProps = (state) => {
  return{
    cartArr: state.cartArr.cartArr,
    count: state.cartArr.count
  }
}

const mapDispatchToProps = {
  removeItem
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart)