import * as React from 'react';
import './popover.css';


 export default class Popover extends React.Component<any, any>{
    render() {
        return <div className="popover-overlay">
            <div className="popover-container">
                {React.createElement(this.props.component, this.props.props)}
            </div>
        </div>
    }
}