import * as React from 'react';
import { ServiceManager } from './servicemanager';
import Button from '@material-ui/core/Button';
import * as lodash from 'lodash';


interface ServiceEditorManagerProps {
    type: string;
    onCompleted: (res?, deleteItem?, updateItem?) => void;
    item: any;
}

export class ServiceEditorManager extends React.Component<ServiceEditorManagerProps,any>{
    constructor(props){
        super(props);
        this.state={
            service : props.item
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(service){
        if(service){
            this.setState({service})
            }
        }

    render(){
        return <div className="service-editor-manager">
            <ServiceManager item={this.state.service} onChange={this.onChange} type="editor" />
            <div className="control-buttons">
                <Button variant="contained" color="primary" onClick={() => this.props.onCompleted(this.state.service, false, true)}>Validate</Button>
                <Button color="primary" onClick={() => this.props.onCompleted(this.state.service, true)}>Delete</Button>
            </div>
        </div>
    }
}