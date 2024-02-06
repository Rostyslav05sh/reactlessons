import axios from "axios";
import {baseURL} from "../Postconstants/urls";

const axiosService = axios.create({baseURL})

export {
    axiosService
}