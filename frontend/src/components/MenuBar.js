import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu"
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuBar(props) {
  const classes = useStyles();
  return(
      <AppBar position="static">
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            OurAppName
          </Typography>

          <IconButton color="inherit" href="/">
            <ExitToAppIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
)
}
