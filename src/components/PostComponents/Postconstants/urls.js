const baseURL = 'https://jsonplaceholder.typicode.com'

const posts = '/posts'
const users = '/users'

const urls = {
    users: {
        base:users,
        byId: (id) => `${users}/${id}`
    },

    posts: {
        base:posts,
        byId: (id) => `${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}