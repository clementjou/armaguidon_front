import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './login';
import { AppShell } from './home';

import './App.css';


const Routes = () => (
      <div>
          <Route exact path="/" component={Login}/>
          <Route path="/home/user/:userId" component={AppShell} />
      </div>
)

 export default class App extends React.Component<any, any>{
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