const baseURl = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'

const urls = {
    cars: {
        base: cars,
        byId: (id) => `${id}/${cars}`
    }
}

export {
    baseURl,
    urls
}