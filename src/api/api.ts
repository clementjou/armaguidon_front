import axios from 'axios';


const baseURI = "http://localhost:5000/";

export default function getDataDashboard(username) {
    if (username) {
        return axios.get(baseURI + 'api/users/');
    }
}

export async function getWeatherApi(location?):Promise<any>{
    let weather;
    const baseURI = `https://api.openweathermap.org/data/2.5/weather?q=${location? location : "paris"}&appid=`;
    const API_KEY = "506518a3fa09231c6c8135dcb25cc873";
    await axios.get(baseURI + API_KEY).then((res)=>{
        if(res && res.data && res.data){
                weather = res.data;
        }
    })
    if(weather){
        return Promise.resolve(weather);
    }else{
        return Promise.reject();
    }
}