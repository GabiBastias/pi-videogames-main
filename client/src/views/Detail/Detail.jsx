import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import styles from './detail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDetail, getDetail } from '../../redux/actions/actions';

const Detail = () => {
    const {id} = useParams();
    const detailedGame = useSelector(state => state.detailedGame);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        dispatch(getDetail(id));
        return dispatch(deleteDetail());
    },[id, dispatch]);

    useEffect(() => {
        console.log(detailedGame);
        if (detailedGame === {}) {
            setLoading(true);   
        } else {
            setLoading(false);
        }
    },[detailedGame]);

    if (loading) {
        return(<div>Loading...</div>);
    };

    return(
        <div className={styles.divDetail}>
            <div className={styles.divImg}>
                <img className={styles.imgDetail} src={detailedGame.image} alt={detailedGame.name} />
            </div>
            <div className={styles.divInfo}>
                <div className={styles.name}>
                    <h2>{detailedGame.name}</h2>
                    <p>{detailedGame.description}</p>
                </div>
                <div className={styles.platforms}>
                    <p>Platforms: </p>
                    {detailedGame.platforms?.map((plat, index) => {
                        return <ul key={index}>
                            <li>{plat}</li>
                        </ul>
                    })}
                </div>
                <div className={styles.genres}>
                    <p>Release Date: {detailedGame.releaseDate}</p>
                    <p>Rating: {detailedGame.rating}</p>
                    <p>Genres: </p>
                    {detailedGame.genres?.map((gen, index) => {
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