const express = require('express');
const router = express.Router();
const pokedexController = require('../controllers/pokedex-controller');

router.get('/', pokedexController.listPokedex);
router.post('/', pokedexController.createPokedex);

module.exports = router;