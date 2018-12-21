import React, { Component } from 'react';
import getDataDashboard from './api/api';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './login';

import './App.css';


const App = () => (
  <BrowserRouter>
    <Switch>
      <div>Coucou</div>
      <Route  path="/" Component={Login} />
    </Switch>
  </BrowserRouter>
)

export default App;