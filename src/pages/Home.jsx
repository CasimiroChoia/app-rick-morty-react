// import style from 'Home.module.css'

import { viteLogo } from "../App";
import Button from "../components/Button";
import style from "./Home.module.css";

const Home = () => {

    return (
        <div className={style.Home}>
            <h1 className={style.h1}>Bemvindo ao Desvendando Rick And Morty</h1>
            <img
                className={style.img}
                src={viteLogo}
                alt='img'
            />

            <Button onClick={() => console.log('botão clicado')} text='começar' />
        </div>
    )
}

export default Home;