import {apiService} from "./ApiService";
import {urls} from "../constants";

const episodeService = {
    getAll: () => apiService.get(urls.episode.base),
    getById: (id) => apiService.get(urls.episode.ById(id))
}

export {
    episodeService
}