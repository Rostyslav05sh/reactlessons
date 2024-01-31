const Character = ({character}) => {
    let {id,name,status,species,gender,image} = character;
    return (
        <div>
            <h1>{name}</h1>
            <p>{`id: ${id}`}</p>
            <p>{`status: ${status}`}</p>
            <p>{`species: ${species}`}</p>
            <p>{`gender: ${gender}`}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};