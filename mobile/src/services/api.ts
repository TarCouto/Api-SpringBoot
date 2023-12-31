import axios from "axios";

import { AppError } from "@utils/AppError";


//Endreco do end point
const api = axios.create({
    baseURL: 'http://localhost:8080'
});

api.interceptors.response.use((response) => response, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.message))
    } else {
        return Promise.reject(error)
    }

})

export { api };