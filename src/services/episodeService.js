import axios from "axios";

import {urls} from "../constants";


const episodesService = {
    getAll: () => axios.get(urls.episodes.base)
}

export {
    episodesService
}