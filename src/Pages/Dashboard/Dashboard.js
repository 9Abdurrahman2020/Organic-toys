import { Divider,List,ListItem,ListItemText,Box,CssBaseline,AppBar,Toolbar,Typography,Drawer} from '@mui/material';
import React, { useState } from 'react';
import { Link, useRouteMatch, Switch } from 'react-router-dom';
import AdminRoute from '../../AdminRoute/AdminRoute';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import useAuth from '../../hooks/useAuth';
import MyOrders from './MyOrders/MyOrders';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProduct from './AddProduct/AddProduct';
import Review from './Review/Review';
import Pay from './Pay/Pay';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import UpdateProduct from './UpdateProduct/UpdateProduct';
import './dashboard.css'

const drawerWidth = 200;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { isAdmin, logOutUser } = useAuth();
    const [ currentUserPage, setCurrentUserPage ] = useState('My Orders')
    const [ currentAdminPage, setCurrentAdminPage ] = useState('All Orders')
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        <h3 className="text-center">Dashboard</h3>
        <Divider />
        <List className="dashboard" >
          <ListItem>
              <ListItemText>
                  <Link to="/">Home</Link>
              </ListItemText>
          </ListItem>
          {
              !isAdmin && <>
                <ListItem>
                <ListItemText>
                    <Link  onClick={ ()=> setCurrentUserPage('My Orders')} to={url}>My Orders</Link>
                </ListItemText>
                </ListItem>
                <ListItem>
                <ListItemText>
                    <Link  onClick={ ()=> setCurrentUserPage('Review')} to={`${url}/review`}>Review</Link>
                </ListItemText>
            </ListItem>
                <ListItem>
                <ListItemText>
                    <Link  onClick={ ()=> setCurrentUserPage('Pay')} to={`${url}/pay`}>Pay</Link>
                </ListItemText>
            </ListItem>
              </>
          }
          {
            isAdmin && <>
            <ListItem>
                <ListItemText>
                    <Link onClick={ ()=> setCurrentAdminPage('All Orders')} to={url}>All Orders</Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <Link onClick={ ()=> setCurrentAdminPage('Make Admin')} to={`${url}/makeAdmin`}>Make Admin</Link>
                </ListItemText>
        </ListItem>
        <ListItem>
            <ListItemText>
                <Link  onClick={ ()=> setCurrentAdminPage('Add Product')} to={`${url}/addService`}>Add Product</Link>
            </ListItemText>
        </ListItem>
        <ListItem>
            <ListItemText>
                <Link onClick={ ()=> setCurrentAdminPage('Manage Products')} to={`${url}/manage`}>Manage Products</Link>
            </ListItemText>
        </ListItem>
        </>
          }
          <ListItem>
              <ListItemText>
                  <button onClick={logOutUser} className="btn btn-danger">Logout</button>
              </ListItemText>
          </ListItem>
        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {
              isAdmin ? currentAdminPage : currentUserPage
            }
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        {
            !isAdmin ? <PrivateRoute exact path={path}>
            <MyOrders/>
        </PrivateRoute> : <PrivateRoute exact path={path}>
            <ManageOrders/>
        </PrivateRoute>
        }
        <PrivateRoute exact path={`${path}/review`}>
            <Review/>
        </PrivateRoute>
        <PrivateRoute exact path={`${path}/pay`}>
            <Pay/>
        </PrivateRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin/>
        </AdminRoute>
        <AdminRoute path={`${path}/addService`}>
                <AddProduct/>
        </AdminRoute>
        <AdminRoute exact path={`${path}/manage`}>
                <ManageProducts/>
        </AdminRoute>
        <AdminRoute path={`${path}/manage/update/:id`}>
                <UpdateProduct/>
        </AdminRoute>
        </Switch>
      </Box>
    </Box>
    );
};

export default Dashboard;