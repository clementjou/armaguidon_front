import * as React from 'react';
import { getWeatherApi } from "../../../api/api";

interface WeatherServiceDisplayerProps {
    item: any;
}

export class WeatherServiceDisplayer extends React.Component<WeatherServiceDisplayerProps, any>{
    constructor(props) {
        super(props);
        this.state = {
            weather: null
        }
    }

    getWeatherImage(condition) {
        if (condition) {
            switch (condition) {
                case "mist":
                    return require("../../../assets/images/weather/sunny.jpg");
            }
        }
    }

    componentWillUpdate(nextProps){
        if(nextProps != this.props){
            getWeatherApi(nextProps.item && nextProps.item.config && nextProps.item.config.location).then((weather) => {
                if (weather) {
                    this.setState({ weather });
                }
            })
        }
    }


    componentDidMount() {
        getWeatherApi(this.props.item && this.props.item.config && this.props.item.config.location).then((weather) => {
            if (weather) {
                this.setState({ weather });
            }
        })
    }

    render() {
        let cityName = this.state.weather && this.state.weather.name;
        let temp = this.state.weather && this.state.weather.main && this.state.weather.main.temp;
        let condition = this.state.weather && this.state.weather.weather && this.state.weather.weather[0] && this.state.weather.weather[0].description;
        let image = this.getWeatherImage(condition);
        let iconCode = this.state.weather && this.state.weather.weather && this.state.weather.weather.length && this.state.weather.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/"+ iconCode +".png"
        return <div className="weather-service-displayer" style={{ backgroundImage: `url(${image})` }}>
            <p>{cityName}</p>
            <p>{condition}</p>
            <img src={iconUrl} alt=""/>
            <p>{temp} °F</p>
        </div>
    }
}