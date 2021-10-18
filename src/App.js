import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Notfound from './Pages/Not found/Notfound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Navigationbar from './Pages/Shared/Nav Bar/Navigationbar';
import Whyus from './Pages/WhyUs/Whyus';
import Footer from './Pages/Home/Footer/Footer';
import News from './Pages/Login/News/News';
import AboutUs from './Pages/AboutUs/AboutUs';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="text-center">
   <AuthProvider>
   <Router>
      <Navigationbar></Navigationbar>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/whyus">
        <Whyus></Whyus>
        </Route>
        <Route path="/news">
        <News></News>
        </Route>
        <Route path="/aboutus">
        <AboutUs></AboutUs>
        </Route>Ro
        < PrivateRoute path="/booking/:serviceName">
        <Booking></Booking>
        </PrivateRoute>
        <Route path="*">
        <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
