import * as React from 'react';
import {getWeatherApi} from "../../../api/api";

interface WeatherServiceDisplayerProps{
item: any;
}

export class WeatherServiceDisplayer extends React.Component<WeatherServiceDisplayerProps,any>{
    constructor(props){
        super(props);
        this.state={
            weather: null
        }
    }
    componentDidMount(){
        getWeatherApi(this.props.item && this.props.item.config && this.props.item.config.location).then((weather)=>{
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