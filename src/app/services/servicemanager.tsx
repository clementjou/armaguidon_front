import * as React from 'react';
import Button from '@material-ui/core/Button';

interface ServiceManagerProps {
    type: string
    onChange:(service? : any)=>  void;
}

export default class ServiceManager extends React.Component<ServiceManagerProps, any>{

    render() {
        let component;
        return <div className="service-manager">
            <Button variant="contained" onClick={() => this.props.onChange(null)}>Back</Button>
            {this.props.type}
        </div>
    }
}