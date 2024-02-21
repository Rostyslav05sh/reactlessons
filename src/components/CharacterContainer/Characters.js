import React, { useEffect, useState } from "react";
import { characterService, episodeService } from "../../services";
import { useLocation } from "react-router-dom";
import { Character } from "./Character";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const {state:{episodeId}} = useLocation();

    useEffect(() => {
        episodeService.getById(episodeId).then(({ data }) => {
            const characterURLs = data.characters;

            const characterRequests = characterURLs.map(characterService.getOne);
            console.log(characterURLs)
            Promise.all(characterRequests)
                .then((characterResponses) => {
                    const characterData = characterResponses.map((response) => response.data);
                    setCharacters(characterData);
                })
        });
    }, [episodeId]);

    return (
        <div>
            {characters && <Character characters={characters} />}
        </div>
    );
};

export { Characters };
