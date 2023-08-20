import { useState } from "react";
import styles from './searchBar.module.css'


const SearchBar = () => {
    const [name, setName] = useState();
    
    return(
        <div className={styles.divSearchBar}>
            <input
                className={styles.inputSearch}
                type="text"
            />
            <button className={styles.buttonSearch}>Search</button>
        </div>
    );
}

export default SearchBar;