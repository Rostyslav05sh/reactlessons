import {Car} from "./Car";

const Cars = ({cars}) => {
    return (
        <div>
            {cars.map(car => <Car key={cars.id} car={car}/>)}
        </div>
    );
};

export {Cars};