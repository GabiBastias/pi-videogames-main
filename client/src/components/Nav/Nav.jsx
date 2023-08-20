import { Link } from 'react-router-dom';
import styles from './nav.module.css'

const Nav = () => {
    return(
        <nav className={styles.divNav}>
            <div className={styles.divBurger}>
                <button className={styles.burguer}></button>
                <ul className={styles.ulNav}>
                    <Link to='/home'>
                        <button>Home</button>
                    </Link>
                    <Link to='/form'>
                        <button>Create</button>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;