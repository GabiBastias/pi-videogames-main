const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllVideogames = require('../controllers/getAllVideogames');
const getVideogame = require('../controllers/getVideogame');
const createVideogame = require('../controllers/createVideogame');
const getGenres = require('../controllers/getGenres');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', getAllVideogames);
router.get('/genres', getGenres);
router.get('/detail/:id', getVideogame);
router.post('/create', createVideogame);

module.exports = router;
