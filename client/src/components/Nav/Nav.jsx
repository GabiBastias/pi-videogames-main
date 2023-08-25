import { Link } from 'react-router-dom';
import styles from './nav.module.css'

const Nav = () => {
    return(
        <div className={styles.divNav}> 
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/form'>Create</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;