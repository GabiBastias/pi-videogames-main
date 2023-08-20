const axios = require('axios');
const { Videogames, Gender } = require('../db');
const URL = 'https://api.rawg.io/api/games?key=39ab55a53667496984900b6170e59930';

const getVideogame = async(req, res) => {
    const {id} = req.params;
    try {
        const gameId = (await axios(URL)).data.results;
        const result = gameId.find(game => game.id === Number(id));
        if (!result) {
            return res.status(404).send('Game not found')
        } else {
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
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = getVideogame;