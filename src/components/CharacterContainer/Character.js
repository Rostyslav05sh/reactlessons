import React from "react";

const Character = ({characters}) => {

    const {id, name, image} = characters;

    console.log(characters)
    return (
        <div>
                    <div>id: {id}</div>
                    <div>name: {name}</div>
                    <img src={image}/>
        </div>
    );
};

export { Character };
