import css from './Header.module.css'

const Header = () => {
    // const [name,] = useAppContext();
    return (
        <div className={css.Header}>
            {/*{*/}
            {/*    name?*/}
            {/*        <h1>{name}</h1>*/}
            {/*        :*/}
            {/*        <h1>Rick & Morty</h1>*/}

            {/*}*/}
            <h1>Rick & Morty</h1>
        </div>
    );
};

export {Header};