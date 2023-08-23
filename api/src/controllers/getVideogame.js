const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genres } = require('../db');
const URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

const getVideogame = async(req, res) => {
    const {id} = req.params;
    const gameId = []
    try {
        for (let i = 0; i < 3; i++) {
            const games = ((await axios(`${URL}&page=${i+1}&page_size=33`)).data.results);
            games.map(game => gameId.push(game))
        }
        const result = gameId.find(game => game.id === Number(id));
        
        if (result) {
            const game = {
                id: result.id,
                name: result.name,
                description: result.description || 'Description not available.',
                platforms: result.platforms.map(plat => plat.platform.name),
                image: result.background_image,
                releaseDate: result.released,
                rating: result.rating,
                genres: result.genres.map(gen => gen.name)
            }
            return res.status(200).json(game)
        }
        const gameDB = await Videogame.findByPk(id, {include: [Genres]});
        if(gameDB) { 
            const titleDB = {
                id: gameDB.id,
                name: gameDB.name,
                description: gameDB.description,
                platforms: gameDB.platforms,
                image: gameDB.image,
                releaseDate: gameDB.releaseDate,
                rating: gameDB.rating,
                genres: gameDB.genres.map(gen => gen.name)
            }
            return res.status(200).json(titleDB); 
        } else {
            return res.status(404).send('Game not found');
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = getVideogame;