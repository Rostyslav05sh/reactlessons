import {useEffect, useState} from "react";

import css from './Episodes.module.css'
import {episodesService} from "../../../services";
import {Episode} from "../Episode/Episode";
import {usePageQuery} from "../../../hooks";

const Episodes = () => {

    const [episodeRes, setEpisodeRes] = useState({prev: null, next: null, results: []})
    const {page, prevPage, nextPage} = usePageQuery();

    useEffect(() => {
        episodesService.getAll(page).then(({data}) => setEpisodeRes( () => {
            const {info: {prev, next}, results} = data;
            return {
                prev,
                next,
                results
            }
        }))
    }, [page]);


    return (
        <div className={css.Episode}>
            {episodeRes.results.map(episode => <Episode key={episode.id} episode={episode}/>)}
            <div className={css.buttons}>
            <button onClick={prevPage} disabled={!episodeRes.prev}>prev</button>
            <button onClick={nextPage} disabled={!episodeRes.next}>next</button>
            </div>
        </div>
    );
};

export {Episodes};