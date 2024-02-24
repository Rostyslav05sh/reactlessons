import axios from "axios";

import {urls} from "../constants";

const characterService = {
    getAll: () => axios.get(urls.characters.base),
    getById: (id) => axios.get(urls.characters.ById(id))
}

export {
    characterService
}