import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';
import image from '../../media/pictures/c9b7d554678d7973a65325cc14a6fe-unscreen.gif';

const Nav = () => {
    return(
        <div className={styles.divNav}>
            <nav className={styles.nav}>
                <div>
                    <img src={image} className={styles.logo}/>
                </div>
                <ul className={styles.navList}>
                    <li><NavLink className={styles.aNav} to='/home'>Home</NavLink></li>
                    <li><NavLink className={styles.aNav} to='/form'>Create</NavLink></li>
                    <li><NavLink className={styles.aNav} to='/info'>Info</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;