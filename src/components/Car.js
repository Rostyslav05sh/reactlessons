import {carsService} from "../services";

const Car = ({car, setCarForUpdate, setTrigger}) => {
    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        await carsService.deleteById(id)
        setTrigger(prev => !prev)
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export {Car};