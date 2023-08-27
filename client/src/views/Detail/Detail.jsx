import { useEffect, useState } from "react";
import {  useLocation, useNavigate, useParams } from "react-router-dom";
import styles from './detail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDetail, getDetail } from '../../redux/actions/actions';
import Loader from "../../components/Loader/Loader";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";

const Detail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const detailedGame = useSelector(state => state.detailedGame);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const descriptionHtml = { __html: detailedGame.description };

    useEffect(()=>{
        dispatch(getDetail(id));
        return dispatch(deleteDetail());
    },[id, dispatch]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
        return () => setLoading(true);
    },[]);

    if (loading) {
        return(<div><Loader/></div>);
    };

    return(
        <div className={styles.divDetail}>
            {console.log(detailedGame)}
            <BackgroundVideo/>
            <div className={styles.infoBorder}>
                <div className={styles.bg}></div>
                <div className={styles.name}>
                        <h2 className={styles.h2Name}>{detailedGame.name}</h2>
                        <div 
                            dangerouslySetInnerHTML={descriptionHtml}
                        ></div>
                </div>
                <div className={styles.divInfo}>
                    <div className={styles.divImg}>
                        <img className={styles.imgDetail} src={detailedGame.image} alt={detailedGame.name} />
                    </div>
                    <div className={styles.platforms}>
                        <h4>Platforms: </h4>
                        {detailedGame.platforms?.map((plat, index) => {
                            return <ul key={index}>
                                <li className={styles.listInfo}>{plat}</li>
                            </ul>
                        })}
                    </div>
                    <div className={styles.genres}>
                        <h4>Release Date: </h4><p className={styles.listInfo}>{detailedGame.releaseDate}</p>
                        <h4>Rating: </h4><p className={styles.listInfo}>{detailedGame.rating}{"\u2B50"}</p>
                        <h4>Genres: </h4>
                        {detailedGame.genres?.map((gen, index) => {
                            return <ul key={index}>
                                <li className={styles.listInfo}>{gen}</li>
                            </ul>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;