import * as React from 'react';
import {getWeatherApi} from "../../../api/api";

interface WeatherServiceDisplayerProps{

}

export class WeatherServiceDisplayer extends React.Component<WeatherServiceDisplayerProps,any>{
    constructor(props){
        super(props);
        this.state={
            weather: null
        }
    }
    componentDidMount(){
        getWeatherApi().then((weather)=>{
            if(weather){
                this.setState({weather});
            }
        })
    }

    render(){
        let cityName = this.state.weather && this.state.weather.name;
        let temp = this.state.weather && this.state.weather.main && this.state.weather.main.temp;
        return <div className="weather-service-displayer">
            <p>{cityName}</p>
            <span>{temp}</span>
        </div>
    }
}