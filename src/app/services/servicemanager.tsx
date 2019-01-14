import * as React from 'react';
import {WeatherServiceEditor} from './editors/weatherservice.editor';
import {NewsServiceEditor} from './editors/newsservice.editor'
import {WeatherServiceDisplayer} from './displayers/weatherservice.displayer';
import {NewsServiceDisplayer} from './displayers/newsservice.displayer';

import './servicemanager.css';

export interface ServiceManagerProps {
    type: string
    onChange?:(service? : any) =>  void;
    item: any;
}

export class ServiceManager extends React.Component<ServiceManagerProps, any>{


    getEditorComponent(){
        if(this.props.item && this.props.item.type && this.props.type == "editor"){
            switch(this.props.item.type){
                case "weather" :
                return WeatherServiceEditor;
                break;
                case "news" : 
                return NewsServiceEditor;
                break;
                default:
                return;
            }
        }else if(this.props.type == "displayer"){
            switch(this.props.item.type){
                case "weather" :
                return WeatherServiceDisplayer;
                break;
                case "news" : 
                return NewsServiceDisplayer;
                break;
                default:
                return;
            }
        }
    }

    render() {

        let component = this.getEditorComponent();
        return <div className="service-manager">
            {React.createElement(component, this.props)}
        </div>
    }
}