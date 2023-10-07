const { config } = require('dotenv');
config();
const mongoose = require('mongoose');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000;

const getWeather = require('./src/services/getWeather');
const findCitiesController = require('./src/controllers/findCitiesController');
const getUnits = require('./src/services/getUnits');

app.use(
    cors({
        origin: '*',
    })
);
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Express on Vercel');
});
// app.get('/createUser', createUserContoller);
// app.get('/creatCities', createCitiesController);
app.post('/cities', findCitiesController);
app.get('/weather', getWeather);
app.get('/units', getUnits);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});



// Export the Express API
module.exports = app;
