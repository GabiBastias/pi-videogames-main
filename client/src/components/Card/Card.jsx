import { Link } from 'react-router-dom';
import styles from './card.module.css';

const Card = ({ data }) =>{
    return(
        <div className={styles.divCard}>
            <div className={styles.cardImg}>
                <Link to={`/detail/${data.id}`}>
                    <img src={data.image} alt={data.name}/>
                </Link>
            </div>
            <Link to={`/detail/${data.id}`}>
                <p>{data.name}</p>
            </Link>
            <p>{data.genres.map(genre => `${genre} `)}</p>
        </div>
    )
}

export default Card;