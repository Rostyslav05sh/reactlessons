import axios from "axios";
import {addictionalURL, baseURL} from "../Constants/urls";



const apiService = axios.create({baseURL});

export {
    apiService,
}