const mongoose = require('mongoose');
const Pokedex = mongoose.model('Pokedex');

// list
exports.listPokedex = async (req, res) => {
    try {
    const data = await Pokedex.find({});
    res.status(200).send(data);
        } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções.'});
    }
};

// create
exports.createPokedex = async (req, res) => {
    try {
        const pokedex = new Pokedex({
            id: req.body.id,
            name: req.body.name,
            type: req.body.type
    });

    console.log(pokedex)

    await pokedex.save();

    res.status(201).send({message: 'Pokemón cadastrado com sucesso!'});
    } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar o Pokemón'}); 
    }
};