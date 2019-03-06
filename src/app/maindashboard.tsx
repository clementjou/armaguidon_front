import * as React from 'react';
import { MainDashboardItems } from './dashboard.items';


export class MainDashboard extends React.Component<any, any> {
    render() {
        return <div className="main-dashboard-container">
            <MainDashboardItems userId={this.props.match.params.userId} />
        </div>
    }
}

