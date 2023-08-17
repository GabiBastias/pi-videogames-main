import styles from './card.module.css';

const Card = ({ title, image, genre }) =>{
    return(
        <div className={styles.divCard}>
            <img src={image} alt={title} className={styles.cardImg}/>
            <p>{title}</p>
            <p>{genre}</p>
        </div>
    )
}

export default Card;