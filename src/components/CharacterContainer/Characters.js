import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Character} from "./Character";
import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../../store/slices/characterSlice";

const Characters = () => {

    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const navigate = useNavigate();
    const {ids} = useParams();

    useEffect(() => {
        dispatch(characterActions.getById(ids))
    }, [ids]);

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