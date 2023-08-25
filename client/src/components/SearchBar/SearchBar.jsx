import { useState } from "react";
import styles from './searchBar.module.css'


const SearchBar = ({onSearch}) => {
    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value)
    }
    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            onSearch(name);
            setName("")
        }
    }
    
    return(
        <div className={styles.divSearchBar}>
            <input
                className={styles.inputSearch}
                onChange={handleChange}
                placeholder=""
                value={name}
                onKeyDown={handleEnter}
            />
            <button className={styles.buttonSearch} onClick={() => {onSearch(name)}}>Search</button>
        </div>
    );
}

export default SearchBar;