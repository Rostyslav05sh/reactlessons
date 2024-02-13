const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos'
const albums = '/albums'
const comments = '/comments'
const posts = '/posts'


const urls = {
    todos,
    albums,
    comments: {
        base: comments,
        byId: (id) => `${comments}/${id}`,
        getPostByCommentId:(id) => `${posts}/${id}`
    }

}

export {
    baseURL,
    urls
}

