import styles from './nav.module.css'

const Nav = () => {
    return(
        <nav className={styles.divNav}>
            <div className={styles.divBurger}>
                <button className={styles.burguer}></button>
                <ul className={styles.ulNav}>
                    <button>Home</button>
                    <button>Create</button>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;