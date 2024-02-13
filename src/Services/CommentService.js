import {apiService} from "./ApiService";
import {urls} from "../Constants/urls";

const commentService = {
    getAll:() => apiService.get(urls.comments.base),
    getPostById:(id) => apiService.get(urls.comments.getPostByCommentId(id)),
}

export {
    commentService
}