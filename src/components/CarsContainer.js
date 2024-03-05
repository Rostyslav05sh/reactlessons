import {useEffect, useState} from "react";
import {carsService} from "../services";
import {CarsForm} from "./CarsForm";
import {Cars} from "./Cars";

const CarsContainer = () => {


    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, [trigger]);


    return (
        <div>
            <CarsForm trigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsContainer};