
/* import './NavBar.css';
import {NavLink} from 'react-router-dom'
let NavBar=()=>{
    return(
        <nav className='myNav'>
           <NavLink to='/home' className='myNavLink'>
           HOME</NavLink> 
            <NavLink to='/students/showall' className='myNavLink'>
            SHOW STUDENTS</NavLink>
            <NavLink to="/students/add" className='myNavLink'>
            ADD STUDENT</NavLink> 
        </nav>
    )
}

export default NavBar;
 */



import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import green from "@material-ui/core/colors/green";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
// react.school/material-ui

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 0.1
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

export default function NavBar() {
  const classes = useStyles();
  const [example, setExample] = useState("primary");
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";
  return (
    <React.Fragment>
      <AppBar
        color={isCustomColor || isCustomHeight ? "primary" : example}
        className={`${isCustomColor && classes.customColor} ${
          isCustomHeight && classes.customHeight
        }`}
      >
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <NavLink style={{'color':'white',textDecoration:'none'}} to="/home">Home</NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <NavLink style={{'color':'white',textDecoration:'none'}} to="/students/showall">Show Students</NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <NavLink style={{'color':'white',textDecoration:'none'}} to="/students/add">Add Student</NavLink>
         
          </Typography>
         
           </Toolbar>
      </AppBar>
      <Toolbar />
      
    </React.Fragment>
  );
}


// <Typography variant="h6" className={classes.title}>
//<NavLink style={{'color':'white'}} to="/students/search/:id">Search Student</NavLink>
//</Typography>  <Button to="/students/add" color="secondary" variant="contained">ADD STUDENT</Button>















