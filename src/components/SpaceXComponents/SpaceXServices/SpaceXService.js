import {axiosService} from "./axiosService";
import {urls} from "../SpaceXConstants/urls";

const spaceXService = {
    getAll: ()=> axiosService(urls.launches.base)
}

export {
    spaceXService
}