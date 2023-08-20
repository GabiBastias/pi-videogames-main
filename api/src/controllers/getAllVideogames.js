const axios = require('axios');
const { Videogame, Genres } = require('../db');
const { Op } = require('sequelize');
const { API_KEY } = process.env;

const getAllVideogames = async(req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const nameGames = [];
            const results = (await axios(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)).data.results;
            const dbGames = await Videogame.findOne({
                where: { 
                    name: {
                        [Op.iLike]: '%' + name + '%'
                    }
                }, include: [Genres]
            });
            
            if (dbGames) {
                let gameDB = {
                    id: dbGames.id,
                    name: dbGames.name,
                    description: dbGames.description,
                    platforms: dbGames.platforms.map(plat => plat.platform.name),
                    image: dbGames.image,
                    releaseDate: dbGames.released,
                    rating: dbGames.rating,
                    genres: dbGames.genres.map(gen => gen.name)
                }
                nameGames.push(gameDB)
            }
            results.map(async(game) => {
                let title = {
                    id: game.id,
                    name: game.name,
                    description: game.description || 'Description not available.',
                    platforms: game.platforms.map(plat => plat.platform.name),
                    image: game.background_image,
                    releaseDate: game.released,
                    rating: game.rating,
                    genres: game.genres.map(gen => gen.name)
                }
                nameGames.push(title)
            });
            return res.status(201).json(nameGames);
        } else {
            const gamesResults = [];
            const gamesAPI = `https://api.rawg.io/api/games?key=${API_KEY}`;
            for (let i = 0; i < 10; i++) {
                let results = (await axios(gamesAPI)).data.results;
                const dataGames = results.map((game) => {
                    let title = {
                        id: game.id,
                        name: game.name,
                        description: game.description || 'Description not available.',
                        platforms: game.platforms.map(plat => plat.platform.name),
                        image: game.background_image,
                        releaseDate: game.released,
                        rating: game.rating,
                        genres: game.genres.map(gen => gen.name)
                    }
                    return title;
                });
                return res.status(200).json(dataGames);
            }
        }
        
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports = getAllVideogames;