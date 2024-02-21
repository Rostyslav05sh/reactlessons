import axios from "axios";

import {apiService} from "./ApiService";
import {urls} from "../constants";

const characterService = {
    getAll: () => apiService.get(urls.character.base),
    getById: (id) => apiService.get(urls.character.ById(id)),
    getOne: (characterURL) => {
        return axios.get(characterURL).then((response) => response.data);
    }
}

export {
    characterService
}