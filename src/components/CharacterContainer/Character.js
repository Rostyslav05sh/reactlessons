import React from "react";

const Character = ({characters}) => {
    console.log(characters)
    return (
        <div>
            {Array.isArray(characters) && characters.map((character, index) => (

                <div key={character?.id || index}>
                    <div>id: {character?.id}</div>
                    <div>name: {character?.name}</div>
                    <img src={character?.image}/>
                </div>
            ))}
        </div>
    );
};

export { Character };
