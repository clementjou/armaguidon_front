import * as React from 'react';
import * as lodash from 'lodash';
import TextField from '@material-ui/core/TextField';


interface WeatherServiceEditorProps {
    item: any;
    onChange : (res?) => void;
}

export class WeatherServiceEditor extends React.Component<WeatherServiceEditorProps, any>{

    onValueChange(patch) {
        if(this.props.item && patch){
            let item = lodash.assign({}, this.props.item, {config : lodash.assign({}, this.props.item.config, patch)});
            this.props.onChange(item);
        }
    }

    render() {

        return <form className="weather-service-editor">
            <TextField label="Ville" margin="normal" type="text" value={this.props.item && this.props.item.config && this.props.item.config.location} onChange={(arg) => this.onValueChange({location : arg.currentTarget.value})} />
        </form>
    }
}