import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Icon, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Categories = props => {
  const classes = useStyles();

  useEffect(() => {
    props.setActiveCategory('')
  }, [])

  const setActive = (e) => {
    e.preventDefault()
    props.setActiveCategory(e.currentTarget.value)
  }

  return (
    <div className={classes.root}>
      {/* <div className="sub-header">
        <Icon fontSize="inherit" className="sub-header">Browse all Categories</Icon>
      </div> */}
      <ul className="nav-ul">
        {props.categories.map(category => (
          <li className="nav-li" key={category.name} color="primary">
            <Button value={category.name} onClick={setActive} color="primary">
              {category.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories;