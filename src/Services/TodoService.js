import {apiService} from "./ApiService";
import {urls} from "../Constants/urls";

const todoService = {
    getAll:() => apiService.get(urls.todos)
}

export {
    todoService
}