const { Videogame, Genres } = require('../db');

const createVideogame = async(req, res) => {
    const { name, description, platforms, image, releaseDate, rating, genres } = req.body;
    try {
        if (!name || !platforms || !image || !releaseDate || !rating || !genres) {
            return res.status(404).send('Missing data.')
        } else {
            const newVideogame = await Videogame.build({ name, description: `<p>${description}</p>` || '<p>Description not available.</p>', platforms, image, releaseDate, rating });
            newVideogame.save();
            for (const genre of genres) {
                const genreName = await Genres.findOne({ where: { name: genre.name } });
                if (genreName) {
                    await newVideogame.addGenres(genreName);
                }
            }
            res.status(200).json(newVideogame);
        }
    } catch (error) {
        return res.status(500).json({error: error.message})    
    }
}

module.exports = createVideogame;