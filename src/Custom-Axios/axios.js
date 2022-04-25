import axios from "axios";

const instance = axios.create({
    baseURL: 'https://backend-lab2.herokuapp.com/',
    headers: {
        "Access-Control-Allow-Headers" : "*"
    }
})

export default instance;
