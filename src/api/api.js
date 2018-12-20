import axios from 'axios';

const baseURI = "http://localhost:5000/";

export default function getDataDashboard(username) {
    if (username) {
        return axios.get(baseURI + 'api/users/');
    }
}