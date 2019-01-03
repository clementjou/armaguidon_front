import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MainDashboard } from './maindashboard';

const Routes = (props) => (
    <div>
        <Route path={props.match.path + "coucou"} component={MainDashboard} />
    </div>
)

class AppRoutes extends React.Component<any, any> {
    render() {
        return <Router>
            <Switch>
                <Routes match={this.props.match} />
            </Switch>
        </Router>
    }
}

export default AppRoutes;

