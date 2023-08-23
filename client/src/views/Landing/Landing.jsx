import styles from './landing.module.css'
import { NavLink } from 'react-router-dom';

const Landing = () => {
    return(
        <div className={styles.divLanding}>
            <h1>Landing Page</h1>
            <NavLink to='/home'>Home</NavLink>
        </div>
    )
}

export default Landing;