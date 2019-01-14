import axios from 'axios';


const baseURI = "http://localhost:5000/";

export default function getDataDashboard(username) {
    if (username) {
        return axios.get(baseURI + 'api/users/');
    }
}

export async function getWeatherApi():Promise<any>{
    const API_KEY = "506518a3fa09231c6c8135dcb25cc873";
    const baseURI = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=";
    axios.get(baseURI + API_KEY).then((res)=>{
        if(res && res.data && res.data){
            const weather = res.data;
            if(weather){
                return Promise.resolve(weather);
            }
        }else{
            return Promise.reject()
        }
    })
    return 
}