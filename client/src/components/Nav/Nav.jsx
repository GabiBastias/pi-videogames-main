import { NavLink } from 'react-router-dom';
import styles from './nav.module.css'
import logo from '../../media/pictures/Logo.png'

const Nav = () => {
    return(
        <div className={styles.divNav}> 
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <img src={logo} alt="" />
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/form'>Create</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;