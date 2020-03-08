import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CollectionsIcon from '@material-ui/icons/Collections';
import RoomIcon from '@material-ui/icons/Room';

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


          {/* When we click the exit button we push the landing page onto the browser's history */}
          {/* NOTE: using href will reload the landing page, but this technique is for Single Page Applications (SPA) */}
          <IconButton color="inherit" onClick={() => props.history.push('/dashboard')}>
            <DashboardIcon/>
          </IconButton>

          <IconButton color="inherit" onClick={() => props.history.push('/dashboard/posts')}>
            <CollectionsIcon/>
          </IconButton>

          <IconButton color="inherit" onClick={() => props.history.push('/dashboard/addpost')}>
            <PostAddIcon/>
          </IconButton>

          <IconButton color="inherit" onClick={() => props.history.push('/dashboard/MapView')}>
            <RoomIcon/>
          </IconButton>

          <IconButton color="inherit" onClick={() => props.history.push('/')}>
            <ExitToAppIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
)
}
