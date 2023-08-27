import { useEffect, useState } from "react";
import validation from "./validation";
import { useDispatch, useSelector } from "react-redux";
import styles from './form.module.css';
import { postGame } from "../../redux/actions/actions";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";

const Form = () => {
    const genres = useSelector(state => state.genres);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        if (genres) {
            setSelectedGenres(genres);
        }
    },[genres]);

    const [newGame, setNewGame] = useState({
        name: "",
        description: "",
        platforms: [],
        releaseDate: "",
        rating: 0,
        image: "",
        genres: []
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        platforms: [],
        releaseDate: "",
        rating: 0,
        image: "",
        genres: []
    });

    const handleChange = (event) => {
        if (event.target.name === "platforms") {
            let newPlatforms = (event.target.value).split(" ");
            setNewGame({...newGame, platforms: newPlatforms});
        } else if (event.target.name === "rating") {
            setNewGame({...newGame, rating: (Number(event.target.value))/20});
        } else {
            setNewGame({...newGame, [event.target.name]: event.target.value});
        };
        setErrors(validation({...newGame, [event.target.name]: event.target.value}));
    }

    const submitGenre = (event) => {
        const genFinder = selectedGenres.find(gen => {
            return gen.name === event.target.value;
        });
        if (newGame.genres.includes(genFinder)) {
            const genFilter = newGame.genres.filter(gen => gen !== genFinder);
            setNewGame({...newGame, genres: genFilter}) ;
        } else {
            setNewGame({...newGame, genres: [...newGame.genres, genFinder]});
        };
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postGame(newGame))
        setNewGame({
            name: "",
            description: "",
            platforms: [],
            releaseDate: "",
            rating: 0,
            image: "",
            genres: []
        });
    };

    return(
        <div className={styles.divForm}>
            {console.log(errors.platforms)}
            <BackgroundVideo/>
            <div className={styles.formBox}>
                <div className={styles.bg}></div>
                <h2 className={styles.h2Form}>Create Videogame</h2>
                <form className={styles.formDetail} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <br />
                        <input 
                            type="text"
                            name="name"
                            value={newGame.name}
                            onChange={handleChange}
                        />
                        <br/>
                        {
                            errors.name ? (<span>{errors.name}</span>) : ("")
                        }
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <br />
                        <textarea 
                            name="description" 
                            value={newGame.description}
                            cols="30" 
                            rows="10"
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="platforms">Platforms: </label>
                        <br />
                        <input 
                            type="text"
                            name="platforms"
                            onChange={handleChange}
                        />
                        <br />
                        {
                            errors.platforms ? (<span>{errors.platforms}</span>) : ("")
                        }
                    </div>
                    <div>
                        <label htmlFor="releaseDate">Release Date: </label>
                        <br />
                        <input 
                            type="date"
                            min="1980-01-01"
                            name="releaseDate"
                            value={newGame.releaseDate}
                            onChange={handleChange}
                        />
                        <br/>
                        {
                            errors.releaseDate ? (<span>{errors.releaseDate}</span>) : ("")
                        }
                    </div>
                    <div>
                        <label htmlFor="rating">Rating: </label>
                        <br />
                        <input 
                            type="range"
                            min="0"
                            max="100"
                            name="rating"
                            onChange={handleChange}
                        />
                        <br />
                        <span>{(newGame.rating)}</span>
                        <br/>
                        {
                            errors.rating ? (<span>{errors.rating}</span>) : ("")
                        }
                    </div>
                    <div>
                        <label htmlFor="image">Image (URL): </label>
                        <br />
                        <input 
                            type="text"
                            name="image"
                            value={newGame.image}
                            onChange={handleChange}
                        />
                        <br/>
                        {
                            errors.image ? (<span>{errors.image}</span>) : ("")
                        }
                    </div>
                    <div>
                        <label htmlFor="">Genre/s: </label>
                        <br />
                        <div className={styles.divGenres}>
                            {
                                selectedGenres ? selectedGenres.map((gen) => {
                                    return <button
                                            type="button"
                                            key={gen.id}
                                            value={gen.name}
                                            onClick={submitGenre}
                                            className={styles.genresButton}
                                        >{gen.name}</button>
                                }) : null
                            }
                            <br />
                        </div>
                        <span>Genres: {newGame.genres.map(gen => `${gen.name} `)} </span>
                        {
                            newGame.genres.length < 1 ? (<span>{errors.genres}</span>) : ("")
                        }
                    </div>
                    <button className={styles.buttonCreate} type="submit"><span>Create</span></button>
                </form>
            </div>
        </div>
    )
}

export default Form;