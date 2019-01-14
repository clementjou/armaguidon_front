import * as React from 'react';
import { ServiceManager } from './servicemanager';
import Button from '@material-ui/core/Button';


interface ServiceEditorManagerProps {
    type: string;
    onCompleted: (res?) => void;
    item: any;
}

export class ServiceEditorManager extends React.Component<ServiceEditorManagerProps,any>{
    constructor(props){
        super(props);
        this.state={
            service : null
        }
    }
    onChange(){

    }

    render(){
        return <div className="service-editor-manager">
            <ServiceManager item={this.props.item} onChange={this.onChange} type="editor" />
            <div className="control-buttons">
                <Button variant="contained" color="primary" onClick={() => this.props.onCompleted(this.state.service)}>Validate</Button>
            </div>
        </div>
    }
}