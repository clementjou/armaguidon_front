import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './login';
import { Home } from './home';

import './App.css';


const coucou = () => (
  'coucou'
)

const Routes = () => (
      <div>
          <Route exact path="/" component={Login}/>
          <Route path="/home/:userId" component={Home} />
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