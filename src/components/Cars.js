import {Car} from "./Car";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carsService} from "../services";
import {carsActions} from "../store";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars, changeTrigger} = useSelector(state => state.cars)

    useEffect(() => {
        carsService.getAll().then(({data}) => dispatch(carsActions.getAllCars(data)))
    }, [changeTrigger, dispatch]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};