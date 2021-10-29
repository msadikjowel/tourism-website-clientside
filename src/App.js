import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import MyBooking from './Pages/MyBooking/MyBooking';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import AddService from './Pages/AddService/AddService';
import SingleService from './Pages/SingleService/SingleService';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div id="dom-container">
          <Header />
          <div id="main-content">
            <Switch>

              <Route exact path='/'>
                <Home></Home>
              </Route>

              <Route exact path='/home'>
                <Home></Home>
              </Route>

              <PrivateRoute exact path='/myBooking'>
                <MyBooking></MyBooking>
              </PrivateRoute>

              <PrivateRoute exact path='/manageBooking'>
                <ManageBookings></ManageBookings>
              </PrivateRoute>

              <PrivateRoute exact path='/addService'>
                <AddService></AddService>
              </PrivateRoute>

              <PrivateRoute exact path='/singleService/:id'>
                <SingleService></SingleService>
              </PrivateRoute>

              <Route exact path='/login'>
                <Login></Login>
              </Route>



            </Switch>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
