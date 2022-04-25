import axios from "axios";

const instance = axios.create({
    baseURL: 'https://frontend-lab2.herokuapp.com/',
    headers: {
        "Access-Control-Allow-Headers" : "*"
    }
})

export default instance;
