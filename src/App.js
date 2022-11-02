import './App.css';
import { Router, Switch } from 'react-router-dom';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Login/login';
import history from './Utils/History/History';
import PrivateRoute from './Router/PrivateRoute';
import PublicRoute from './Router/PublicRoute';

function App() {
  return (
    <>
      <ToastContainer />
      <Router history={history} basename="/govsurvey">
        <Switch>
          <PublicRoute exact path="/login">
            <Login />
          </PublicRoute>

          <PrivateRoute />
        </Switch>
      </Router>
    </>
  );
}

export default App;
