import {apiService} from "./ApiService";
import {urls} from "../Constants/urls";

const userService = {
    getAll:() => apiService.get(urls.users),
    create:(data)=>apiService.post(urls.users, data)
}




export {
    userService
}