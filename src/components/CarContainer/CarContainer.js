import {useEffect, useState} from "react";
import {carService} from "../Services/CarService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarContainer = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, []);


    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarContainer};