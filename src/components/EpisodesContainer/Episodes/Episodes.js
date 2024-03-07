import {useEffect} from "react";

import css from './Episodes.module.css'
import {Episode} from "../Episode/Episode";
import {usePageQuery} from "../../../hooks";
import {useDispatch, useSelector} from "react-redux";
import {episodeActions} from "../../../store/slices/episodeSlice";

const Episodes = () => {

    const dispatch = useDispatch();
    const {episodes, prevPage, nextPage} = useSelector(state => state.episodes);
    const {page, prevPageBtn, nextPageBtn} = usePageQuery();

    useEffect(() => {
        dispatch(episodeActions.getAll({page}))
    }, [page, dispatch]);


    return (
        <div className={css.Episode}>
            {episodes.map(episode => <Episode key={episode.id} episode={episode} characters={episode.characters}/>)}
            <div className={css.buttons}>
            <button onClick={prevPageBtn} disabled={!prevPage}>prev</button>
            <button onClick={nextPageBtn} disabled={!nextPage}>next</button>
            </div>
        </div>
    );
};

export {Episodes};