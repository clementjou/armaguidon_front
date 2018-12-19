import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getDashboard from './api/api';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      userName : ""
    }

    this.getDashboard = this.getDashboard.bind(this);
  }

  onFormChange(value){
    this.setState({
      userName : value
    })
  }

  getDataDashboard(username) {
    if (username) {
        return axios.get('http://localhost:5000/api/users/');
    }
}

  getDashboard(){
    let username = this.state.userName;
    if(username){
        this.getDataDashboard(username).then(res=>{
          return res.data && res.data.map((res)=>{
            if(res.Firstname && res.Firstname.toLowerCase() == username && username.toLowerCase()){
              this.setState({currentUser : this.state.userName});
            }
          })
        })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="connexion-form">
          <input onChange={(arg)=> this.onFormChange(arg.target.value)} type="text" placeholder="Type your name" value={this.state.userName}/>
          <button onClick={this.getDashboard}>Valider</button>
        </div>
      </div>
    );
  }
}

export default App;
