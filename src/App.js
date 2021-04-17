import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Homes/Home/Home';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Review from './Components/Homes/ReviewData/Review/Review';
import Login from './Components/Login/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import addServices from './Components/Services/addServices/addServices';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <Router>
        <Switch>
          <PrivateRoute path="/review">
            <Review/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/dashboard/addServices">
            <addServices/>
          </PrivateRoute>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
        </Switch>
      </Router>


       </UserContext.Provider>
      
    </div>
  );
}

export default App;
