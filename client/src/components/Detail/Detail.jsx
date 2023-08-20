import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './detail.module.css';


const Detail = () => {

    const {id} = useParams();
    const [game, setGame] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {   //Revisar
        try {
            axios(`/videogames/detail/${id}`)
            .then(({data}) => {
                if(data.name){
                    setGame(data)
                } else {
                    alert('Game not found')
                }
                setLoading(false);
            })
            .catch(error => {
                setLoading(false)
                throw new Error(error.message);
            })
        } catch (error) {
            setLoading(false)
            throw new Error(error.message);
        }
    },[id])

    if (loading) {
        return(<div>Loading...</div>)
    }

    return(
        <div className={styles.divDetail}>
            <div className={styles.divImg}>
                <img className={styles.imgDetail} src={game.image} alt={game.name} />
            </div>
            <div className={styles.divInfo}>
                <div className={styles.name}>
                    <h2>{game.name}</h2>
                    <p>{game.description}</p>
                </div>
                <div className={styles.platforms}>
                    <p>Platforms: </p>
                    {game.platforms?.map((plat, index) => {
                        return <ul key={index}>
                            <li>{plat}</li>
                        </ul>
                    })}
                </div>
                <div className={styles.genres}>
                    <p>Release Date: {game.releaseDate}</p>
                    <p>Rating: {game.rating}</p>
                    <p>Genres: </p>
                    {game.genres?.map((gen, index) => {
                        return <ul key={index}>
                            <li>{gen}</li>
                        </ul>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Detail;