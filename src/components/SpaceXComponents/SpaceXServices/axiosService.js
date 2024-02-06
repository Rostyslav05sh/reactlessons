import axios from "axios";
import {baseURL} from "../SpaceXConstants/urls";

const axiosService = axios.create({baseURL})

export {
    axiosService
}
