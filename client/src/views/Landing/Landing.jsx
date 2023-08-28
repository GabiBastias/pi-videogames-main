import styles from './landing.module.css'
import { NavLink } from 'react-router-dom';
import video from '../../media/video/Beach_Night.mp4'

const Landing = () => {
    return(
        <div className={styles.divLanding}>
            <video className={styles.videoBackground} loop autoPlay muted>
                <source src={video}/>
            </video>
            <div className={styles.divButton}>
                <NavLink to='/home' className={styles.navLinkButton}>W E L C O M E !</NavLink>
            </div>
        </div>
    )
}

export default Landing;