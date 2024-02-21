import React, {useEffect, useState} from "react";
import {episodeService} from "../../services";
import {useLocation} from "react-router-dom";
import {Character} from "./Character";
import axios from "axios";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const {state:{episodeId}} = useLocation();

    useEffect(() => {
        episodeService.getById(episodeId).then(({ data }) => {
            const characterURLs = data.characters;

            for (const characterURL of characterURLs) {
                // console.log(characterURL)
            // Promise.all(characterURL)
            //     .then((characterResponses) => {
            //         const characterData = characterResponses.map((response) => response.data);
            //         setCharacters(characterData);
            //     })
                axios.get(characterURL).then(({data}) => setCharacters(data))
        }
            })

    }, [episodeId]);

    return (
        <div>
            {characters && <Character characters={characters} request={request}/>}
        </div>
    );
};

export { Characters };
