import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class Client extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <div>Coucou</div>
                    <Route path="/home" Component={App} />
                </Switch>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<Client />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
