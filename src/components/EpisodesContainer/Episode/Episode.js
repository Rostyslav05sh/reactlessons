import {useNavigate} from "react-router-dom";

import css from './Episode.module.css';
import {useDispatch, useSelector} from "react-redux";

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {getIds} = useSelector(state => state.episodes);
    const toCharacters = () => {
        navigate(`/characters/${getIds}`)
    };

    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};