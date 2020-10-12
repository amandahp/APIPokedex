const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({ 
        id: Number,
        name: String,
        type: Array,   
});

module.exports = mongoose.model('Pokedex', schema);