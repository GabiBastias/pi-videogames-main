import { Link } from 'react-router-dom';
import styles from './card.module.css';

const Card = ({ id, title, image, genre }) =>{
    return(
        <div className={styles.divCard}>
            <img src={image} alt={title} className={styles.cardImg}/>
            <Link to={`/detail/${id}`}>
                <p>{title}</p>
            </Link>
            <p>{genre}</p>
        </div>
    )
}

export default Card;