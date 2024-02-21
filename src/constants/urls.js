const baseURL = "https://rickandmortyapi.com/api"

const api = '/api'
const character = '/character'
const episode = '/episode'

const urls = {
    character: {
        base: character,
        ById: (id) => `${character}/${id}`
    },
    episode: {
        base: episode,
        ById: (id) => `${episode}/${id}`
    }
}

export {
    baseURL,
    urls
}