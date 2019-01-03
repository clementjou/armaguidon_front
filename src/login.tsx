import * as React from 'react';
import getDataDashboard from './api/api';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './App.css';


export class Login extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    }

    this.getDashboard = this.getDashboard.bind(this);
  }

  onFormChange(value) {
    this.setState({
      userName: value
    })
  }



  getDashboard(arg) {
    arg.preventDefault();
    let username = this.state.userName;
    if (username) {
      getDataDashboard(username).then(res => {
        return res.data && res.data.map((res) => {
          if (res.Firstname && res.Firstname.toLowerCase() == username && username.toLowerCase()) {
            this.setState({ currentUser: this.state.userName, noUserFound: false });
            this.props.history.push('/home/' + this.state.userName );
          } else {
            this.setState({ noUserFound: true, currentUser: "" })
          }
        })
      })
    }
  }

  render() {
    let User;
    if (this.state.noUserFound) {
      User = <div className="error">
        No user found
      </div>
    }
    if (this.state.currentUser) {
      User = <div className="login-message">
        Hello {this.state.currentUser}
        His
      </div>
    }

    return (
      <div className="App">
        <form onSubmit={(arg) => this.getDashboard(arg)} className="connexion-form">
          <TextField className="login-input" error={this.state.noUserFound} onChange={(arg) => this.onFormChange(arg.target.value)} type="text" placeholder="Type your name" value={this.state.userName} />
          <Button variant="contained" onClick={this.getDashboard}>Valider</Button>
        </form>
        {User}
      </div>
    );
  }
}
