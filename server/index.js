const { config } = require('dotenv');
config();
const mongoose = require('mongoose');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000;

const createUserContoller = require('./src/controllers/createUserController');
const getWeather = require('./src/services/getWeather');
const createCitiesController = require('./src/controllers/createCitiesController');
const findCitiesController = require('./src/controllers/findCitiesController');

app.use(
    cors({
        origin: '*',
    })
);
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Express on Vercel');
});
app.get('/createUser', createUserContoller);
app.get('/creatCities', createCitiesController);
app.post('/cities', findCitiesController);
app.get('/weather', getWeather);

// mongoose.connect(process.env.MONGO_URL).then(() => {
//     console.log(`listening on port ${PORT}`);
//     app.listen(PORT);
// });

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}.`);
});

// Export the Express API
module.exports = app;
