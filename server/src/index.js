const { config } = require('dotenv');
config();
const mongoose = require('mongoose');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000;

const createUserContoller = require('./controllers/createUserController');
const getWeather = require('./services/getWeather');
const createCitiesController = require('./controllers/createCitiesController');
const findCitiesController = require('./controllers/findCitiesController');

app.use(
    cors({
        origin: '*',
    })
);
app.use(express.json());

app.get('/', createUserContoller);
app.get('/creatCities', createCitiesController);
app.post('/cities', findCitiesController);
app.get('/weather', getWeather);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});
