import axios from "axios";
import {baseURl} from "../Constants/urls";

const apiService = axios.create({baseURl})

export {
    apiService
}