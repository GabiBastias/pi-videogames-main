const axios = require('axios');
const { API_KEY } = process.env;
const { Genres } = require('../db');
let dataBase = null;

const getGenres = async(req, res) => {
    try {
        const results = (await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results;
        if (!dataBase) {
            dataBase = await Genres.bulkCreate(results);
        }
        return res.status(200).json(dataBase);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getGenres;