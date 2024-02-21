import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";
const Episode = ({episodes}) => {

    const navigate = useNavigate();

    return (
        <div className={css.Episode}>
            {episodes.results && (
                episodes.results.map((episode) => (
                    <div key={episode.id} className={css.EpisodeCont} onClick={() => navigate('/characters', {state: {episodeId: episode.id}})}>
                        <div>id: {episode.id}</div>
                        <div>name: {episode.name}</div>
                        <div>episode: {episode.episode}</div>
                    </div>
                ))
            )}
        </div>
    );
};

export {Episode};