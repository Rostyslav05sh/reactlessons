import {Outlet, useNavigate} from "react-router-dom";

const UserDetail = ({user}) => {

    const {id, name, username, email, address} = user

    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address:<br/> city: {address.city}<br/> street: {address.street}</div>
            <button onClick={() => navigate('posts', {state:{userId: id}})}>post of current user</button>
            <Outlet/>
        </div>
    );
};

export {UserDetail};