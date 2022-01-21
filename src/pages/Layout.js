/* eslint-disable eqeqeq */
import { SubjectOutlined } from "@mui/icons-material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
  drawPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  active: {
    background: "#f4f4f4",
  },
  appbar:{
      marginLeft:drawerWidth
  }
});

function Layout({ children }) {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/GridComp",
    },
    {
      text: "Form Comp",
      icon: <SubjectOutlined color="secondary" />,
      path: "/form",
    },
    {
      text: "Create",
      icon: <SubjectOutlined color="secondary" />,
      path: "/create",
    },
   
  ];
  return (
    <>
     
      <div className={classes.root}>

      <AppBar  >
        <Toolbar className={classes.appbar}>
          <Typography color='cyan' variant='h3'  > Hellooo world ......!!!!!</Typography>
        </Toolbar>
      </AppBar>
      
        {/* side drawer */}
        <Drawer
          className={classes.drawer}
          // variant="permanent"
          variant="persistent"
          anchor="left"
          open={open}
          // override default size of drawer
          classes={{ paper: classes.drawPaper }}
        >
          <div>
          <IconButton onClick={handleDrawerClose}>
            {!open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
          <div>
            <Typography variant="h5"> Permanent Drawer</Typography>
          </div>
          <List>
            {menuItems.map((item, index) => (
              // used router link
              // <ListItem button key={index} component={Link} to={item.path}>
              //  we can use router link by history hook as well.
              <ListItem
                button
                key={index}
                onClick={() => history.push(item.path)}
                style={ location.pathname == item.path ? {background: '#f4f4f4'}:null}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <div>
          {children}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Paper
              elevation={24}
              style={{ width: "100%", textAlign: "center" }}
            >
              <h3>Footer</h3>
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
