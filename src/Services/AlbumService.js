import {apiService} from "./ApiService";
import {urls} from "../Constants/urls";

const albumService = {
    getAll:() => apiService.get(urls.albums)
}

export {
    albumService
}