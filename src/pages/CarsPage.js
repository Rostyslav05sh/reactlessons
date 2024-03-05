import {useEffect, useState} from "react";
import {carsService} from "../services";
import {Cars} from "../components/Cars";
import {CarsForm} from "../components/CarsForm";


const CarsPage = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, [trigger]);

    return (
        <div>
            <CarsForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarsPage};