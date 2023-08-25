import styles from './landing.module.css'
import video from '../../media/video/Red_Skull.mp4'
// import video from '../../media/video/Beyond_Sunset.mp4'
import { NavLink } from 'react-router-dom';

const Landing = () => {
    return(
        <div className={styles.divLanding}>
            <br/>
            <video loop autoPlay muted>
                <source src={video}/>
            </video>
            <div className={styles.divButton}>
                <NavLink to='/home' className={styles.navLinkButton}>ENJOY!</NavLink>
            </div>
        </div>
    )
}

export default Landing;