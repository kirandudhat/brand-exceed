import './App.css';
import { Router, Switch,Route } from 'react-router-dom';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Login/login';
import history from './Utils/History/History';
import PrivateRoute from './Router/PrivateRoute';
import PublicRoute from './Router/PublicRoute';
import SurveyResponse from './Pages/Survey/SurveyResponse';

function App() {
  return (
    <>
      <ToastContainer />
      <Router history={history}>
        <Switch>
          <PublicRoute exact path="/login">
            <Login />
          </PublicRoute>
          <PublicRoute exact path="/response">
            <SurveyResponse />
          </PublicRoute>

          <PrivateRoute />
        </Switch>
      </Router>
    </>
  );
}

export default App;
