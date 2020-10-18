const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


var corsOptions = {
  origin: '*',
  methods: 'GET', 
};

app.use(cors(corsOptions))
app.options('*', cors(corsOptions)) // include before other routes
// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// Load pokedex
const Pokedex = require('./models/pokedex');


// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const pokedexRoutes = require('./routes/pokedex-routes');
app.use('/pokedex', pokedexRoutes);

module.exports = app;

