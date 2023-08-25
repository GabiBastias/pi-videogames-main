import styles from './home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { allGames, filterGames, orderGames, setPage, wordName } from '../../redux/actions/actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import Paginated from '../../components/Paginated/Paginated';
import { useEffect, useState } from 'react';
import video from '../../media/video/Beyond_Sunset.mp4'
import Loader from '../../components/Loader/Loader';

const Home = () => {
    const videogames = useSelector(state => state.videogames);
    const currentPage = useSelector(state => state.currentPage);
    const genres = useSelector(state => state.genres);
    const dispatch = useDispatch();

    const onSearch = async(word) => {
        if (word) {
            dispatch(wordName(word));
        } else {
            dispatch(allGames());
        };
        dispatch(setPage(0));
    };

    // Loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => setLoading(true)
    },[])

    if (loading) return (<div><Loader /></div>)

    // Paginated
    const totalPages = Math.ceil(videogames.length / 15);
    const onPageChange = (pageNumber) => {
        dispatch(setPage(pageNumber));
    };
    const gamesPerPage = 15;
    const startIndex = currentPage * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;
    const visibleGames = videogames.slice(startIndex, endIndex);
    
    //Orders and Filters
    const handlerOrder = (event) => {
        dispatch(orderGames(event.target.value));
    };
    const handleFilter = (event) => {
        dispatch(filterGames(event.target.value));
    };
    
    return(
        <div className={styles.homeContainer}>
            <video className={styles.videoBackground} loop autoPlay muted>
                <source src={video}/>
            </video>
            <div className={styles.divHome}>
                <SearchBar onSearch={onSearch}/>
                <div className={styles.divSelect}>
                    <select className={styles.select} onChange={handlerOrder}>
                        <option value="Default">Default</option>
                        <option value="Ascendant">Ascending Alphabetically</option>
                        <option value="Descendant">Decending Alphabetically</option>
                        <option value="RatingUp">Rating Up</option>
                        <option value="RatingDown">Rating Down</option>
                    </select>
                    <select className={styles.select} onChange={handleFilter}>
                        <option value="All">All Games</option>
                        {
                            genres && genres.map((gen) =>{
                                return <option key={gen.id} value={gen.name}>{gen.name}</option>
                            })
                        }
                        <option value="DataBase">DataBase</option>
                        <option value="API">API</option>
                    </select>
                </div>
                <ul className={styles.ulCards}>{
                    visibleGames.map((title, index) => {
                        return <Card
                        key={index}
                        data={title}
                        />
                    })
                }</ul>
                <Paginated
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange ={onPageChange}
                />
            </div>
        </div>
    )
}

export default Home;