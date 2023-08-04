import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Production from './pages/Productions';
import Documents from './pages/Documents';
import Meeting from './pages/Meeting';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styled from 'styled-components';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Routers = [
  {
    path: '/',
    element: <Home />,
    name: 'Inicio',
  },
  {
    path: '/productions',
    element: <Production />,
    name: 'Produção Cooperativista'
  },
  {
    path: '/documents',
    element: <Documents />,
    name: 'Documentos' 
  },
  {
    path: '/meetings',
    element: <Meeting />,
    name: 'Assembleias'
  },
  {
    path: '/notifications',
    element: <Notifications />,
    name: 'Comunicados'
  },
  {
    path: '/profile',
    element: <rofile />,
    name: 'Meus dados'
  }
]

const router = createBrowserRouter(Routers);
const drawerWidth = 220;

function App() {
  const [isOpenMenu, setOpenMenu] = React.useState(false);

  return (
    <React.StrictMode>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
         sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
          <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenMenu(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
    </AppBar>
    </Box>
    <Drawer
      variant="persistent"
      anchor={'left'}
      open={isOpenMenu}
      onClose={() => setOpenMenu(false)}
      sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
      }}
    >
            <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

      <List disablePadding>
        {Routers.map((router, index) => (
          <ListItem key={router.path} disablePadding>
            <ListItemButton>
              <Link href={router.path} underline="none">
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon >
              <ListItemText primary={router.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
