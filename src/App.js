import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './login';
import { AppShell } from './home';

import './App.css';


const Routes = () => (
      <div>
          <Route exact path="/" component={Login}/>
          <Route path="/home/:userId" component={AppShell} />
      </div>
)

 class App extends React.Component{
   render(){
     return <Router>
       <div>
         <Switch>
          <Routes />
         </Switch>
       </div>
   </Router>
   }
 }


export default App;