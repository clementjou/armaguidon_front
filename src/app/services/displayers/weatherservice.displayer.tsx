import * as React from 'react';
import {getWeatherApi} from "../../../api/api";

interface WeatherServiceDisplayerProps{

}

export class WeatherServiceDisplayer extends React.Component<WeatherServiceDisplayerProps,any>{
    componentDidMount(){
        getWeatherApi().then((weather)=>{
            if(weather){
                this.setState({weather});
            }
        })
    }

    

    render(){
        return <div className="weather-service-displayer">
            <p>Paris</p>
        </div>
    }
}