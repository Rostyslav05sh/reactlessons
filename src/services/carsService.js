import {apiService} from "./ApiService";
import {urls} from "../constants";

const carsService = {
    getAll: () => apiService.get(urls.cars.base),
    getById: (id) => apiService.get(urls.cars.ById(id)),
    create: (data) => apiService.post(urls.cars.base, data),
    updateById: (id, data) => apiService.put(urls.cars.ById(id), data),
    deleteById: (id) => apiService.delete(urls.cars.ById(id))
}

export {
    carsService
}