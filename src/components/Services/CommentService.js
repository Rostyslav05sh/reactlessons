import {apiService} from "./ApiService";
import {urls} from "../Constants/urls";

const commentService = {
    getAll:() => apiService.get(urls.comments),
    create:(data) => apiService.post(urls.comments, data)
}

export {
    commentService
}