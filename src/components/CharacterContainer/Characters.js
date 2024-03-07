import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Character} from "./Character";
import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../../store/slices/characterSlice";

const Characters = () => {

    const dispatch = useDispatch();
    const {characters, ids} = useSelector(state => state.characters);
    const navigate = useNavigate();

    console.log(ids);

    useEffect(() => {
        dispatch(characterActions.getById(ids))
    }, [ids, dispatch]);

    const back = () => {
        navigate(-1)
    }

    return (
        <div>
            <button onClick={back}>back</button>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};