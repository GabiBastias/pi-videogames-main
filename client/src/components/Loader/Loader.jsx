import styles from './loader.module.css';
import video from '../../media/video/31.mp4' 

const Loader = () => {
    return(
        <div className={styles.divLoader}>
            <video autoPlay muted>
                <source src={video}/>
            </video>
        </div>
    )
}

export default Loader;