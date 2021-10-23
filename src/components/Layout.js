import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import format from 'date-fns/format';

const drawerWidth = 240;

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex'
    },
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerTitle: {
      padding: theme.spacing(2)
    },
    activeDrawer: {
      background: '#f9f9f9'
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1
    }
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const drawerItemes = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: '/create'
    }
  ];

  return (
    <div className={classes.root}>
      {/* App Bar */}
      <AppBar className={classes.appBar} eleveation={1}>
        <Toolbar>
          <Typography variant='h6' className={classes.date}>
            Today is {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>Kautsar</Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5' className={classes.drawerTitle}>
            Notes Apps
          </Typography>
        </div>

        {/* List / Links */}
        <List>
          {drawerItemes.map(item => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.activeDrawer : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
