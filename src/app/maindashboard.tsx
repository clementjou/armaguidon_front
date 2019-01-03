import * as React from 'react';
import { MainDashboardItems } from './dashboard.items';


export class MainDashboard extends React.Component {
    render() {
        return <div className="main-dashboard-container">
            <MainDashboardItems />
        </div>
    }
}

