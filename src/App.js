import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import AllToys from './Pages/AllToys/AllToys';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Order from './Pages/Order/Order';
import Register from './Pages/Register/Register';
import SingleDetails from './Pages/SingleDetails/SingleDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/single-detail/:id">
            <SingleDetails/>
          </Route>
          {/* <Route path="/cart">
            <Cart/>
          </Route> */}
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/toys">
            <AllToys/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <PrivateRoute path="/order/:id">
            <Order/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
