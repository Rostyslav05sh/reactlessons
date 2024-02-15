import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const userService = {
    getAll:() => apiService.get(urls.users.base),
    getById:(id) => apiService.get(urls.users.byId(id)),
    getPostsOfUserById:(id) => apiService.get(urls.users.postsOfUserById(id))
}

const postService = {
    getAll:() => apiService.get(urls.posts.base),
    getById:(id) => apiService.get(urls.posts.byId(id))
}

export {
    userService,
    postService
}