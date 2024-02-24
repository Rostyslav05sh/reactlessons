import {apiService} from "./apiService";

import {urls} from "../constants";


const episodesService = {
    getAll: (page) => apiService.get(urls.episodes.base, {params: {page}})
}

export {
    episodesService
}