import {Outlet, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../services/userService";
import {UserDetail} from "../componets/UserDetail";

const UsersDetailsPage = () => {

    const [user, setUser] = useState(null)
    const {state:{userId}} = useLocation();

    useEffect(() => {
        userService.getById(userId).then(({data}) => setUser(data))
    }, [userId]);


    return (
        <div>
            {user && <UserDetail user={user}/>}
            <Outlet/>
        </div>
    );
};

export {UsersDetailsPage};