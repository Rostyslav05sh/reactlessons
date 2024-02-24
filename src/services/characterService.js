import {urls} from "../constants";
import {apiService} from "./apiService";

const characterService = {
    getAll: () => apiService.get(urls.characters.base),
    getById: (ids) => apiService.get(urls.characters.ById(ids))
}

export {
    characterService
}