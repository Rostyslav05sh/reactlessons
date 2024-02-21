import {useEffect, useState} from "react";
import {episodeService} from "../../services";
import {Episode} from "./Episode";
import css from "./Episode.module.css";
import {useSearchParams} from "react-router-dom";
import {useAppContext} from "../../hooks/useAppContext";

const Episodes = () => {

    const [episodes, setEpisodes] = useState([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})
    const {trigger} = useAppContext() || {};

    useEffect(() => {
        episodeService.getAll(query.get('page')).then(({data}) => {
            setEpisodes(data)
            setPrevNext({prev: data.prev, next: data.next})
            })

    }, [trigger, query]);

    const prev = () => {
      setQuery((prev) => {
          prev.set('page', (+prev.get('page') - 1).toString())
          console.log(prev)
          return prev
      })
    }

    const next = () => {
      setQuery((prev) => {
          prev.set('page', (+prev.get('page') + 1).toString())
          console.log(prev)
          return prev
      })
    }

    return (
        <div>
            {episodes && <Episode episodes={episodes}/>}
            <div className={css.EpisodeBtn}>
                <button onClick={prev} disabled={!prevNext.prev}>prev</button>
                <button onClick={next} disabled={!prevNext.next}>next</button>
            </div>
        </div>
    );
};

export {Episodes};