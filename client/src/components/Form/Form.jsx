import { useEffect, useState } from "react";
import validation from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { allGenres } from "../../redux/actions/actions";

const Form = () => {

    const genres = useSelector(state => state.genres)
    const dispatch = useDispatch();

    const [selectedGenres, setSelectedGenres] = useState([]);
    
    useEffect(() => {
        if (genres) {
            setSelectedGenres(genres)
        }
    },[genres])

    const [newGame, setNewGame] = useState({
        name: "",
        description: "",
        platforms: [],
        releaseDate: "",
        rating: 0,
        imageURL: "",
        genres: []
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        platforms: [],
        releaseDate: "",
        rating: 0,
        imageURL: "",
        genres: []
    });

    useEffect(() => {
        dispatch(allGenres());
    },[])

    const handleChange = (event) => {
        setNewGame({...newGame, [event.target.name]: event.target.value})
        setErrors(validation({...newGame, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const submitGenre = (event) => {
        // console.log(selectedGenres);
        // console.log(event.target.value);
        const genFinder = selectedGenres.find(gen => {
            return gen.name === event.target.value
        })
        setNewGame({...newGame, genres: [...newGame.genres, genFinder]})
    }

    return(
        <div>
            <h2>Form</h2>
            {/* {console.log(selectedGenres)} */}
            <form onSubmit={handleSubmit}>
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
                        id=""
                        cols="30" 
                        rows="10"
                        onChange={handleChange}
                    ></textarea>
                    <br/>
                    {
                        errors.description ? (<span>{errors.description}</span>) : ("")
                    }
                </div>
                <div>
                    <label htmlFor="platforms">Platforms: </label>
                    <br />
                    <input 
                        type="text"
                        name="platforms"
                        value={newGame.platforms}
                        onChange={handleChange}
                    />
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
                        value={newGame.rating}
                        onChange={handleChange}
                    />
                    <br />
                    <span>{(newGame.rating)/20}</span>
                    <br/>
                    {
                        errors.rating ? (<span>{errors.rating}</span>) : ("")
                    }
                </div>
                <div>
                    <label htmlFor="imageURL">Image (URL): </label>
                    <br />
                    <input 
                        type="text"
                        name="imageURL"
                        value={newGame.imageURL}
                        onChange={handleChange}
                    />
                    <br/>
                    {
                        errors.imageURL ? (<span>{errors.imageURL}</span>) : ("")
                    }
                </div>
                <div>
                    <label htmlFor="">Genre/s: </label>
                    <br />
                    {
                        selectedGenres ? selectedGenres.map((gen) => {
                            return <button 
                                    key={gen.id}
                                    value={gen.name}
                                    onClick={submitGenre}
                                >{gen.name}</button>
                        }) : null
                    }
                    <br />
                </div>
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default Form;