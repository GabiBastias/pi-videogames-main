import styles from './home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { useEffect } from 'react';
import { allGames } from '../../redux/actions/actions';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videogames);
    useEffect(()=>{
        dispatch(allGames())
    },[dispatch]);

    return(
        <div className={styles.divHome}>
            <SearchBar/>
            <ul className={styles.ulCards}>{videogames.map((title) => {
                return <Card
                    key={title.id}
                    id={title.id}
                    title={title.name}
                    image={title.image}
                    genre={title.genres.map(genre => `${genre}\n`)}
                />
            })}
            </ul>
        </div>
    )
}

export default Home;