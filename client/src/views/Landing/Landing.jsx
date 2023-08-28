import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';
import styles from './landing.module.css'
import { NavLink } from 'react-router-dom';
const BACKGROUND_TYPE = 'Beach_Night';


const Landing = () => {
    return(
        <div className={styles.divLanding}>
            <BackgroundVideo videoType={BACKGROUND_TYPE}/>
            <div className={styles.divButton}>
                <NavLink to='/home' className={styles.navLinkButton}>W E L C O M E !</NavLink>
            </div>
        </div>
    )
}

export default Landing;