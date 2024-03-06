import {Cars} from "../components/Cars";
import {CarsForm} from "../components/CarsForm";


const CarsPage = () => {

    return (
        <div>
            <CarsForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};