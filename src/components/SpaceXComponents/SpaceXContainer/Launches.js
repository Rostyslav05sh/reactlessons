import {Launch} from "./Launch";
import {useEffect, useState} from "react";
import {spaceXService} from "../SpaceXServices/SpaceXService";

const Launches = () => {

    const [spaceX, setSpaceX] = useState([])

    useEffect(() => {
    spaceXService.getAll().then(({data}) => setSpaceX(data))
    }, []);

    return (
        <div>
            {spaceX.map(launch  => <Launch key={launch.id} launch={launch}/>)}
        </div>
    );
};

export {Launches};