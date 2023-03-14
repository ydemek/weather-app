const axios = require('axios');

const API_KEY = process.env.API_KEY;
const UNIT_GROUP = 'metric';
const weatherApiBase =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

module.exports = getWeather = async (req, res) => {
    let cityName = req.query.cityName;
    await axios
        .get(
            weatherApiBase +
                cityName +
                `?unitGroup=${UNIT_GROUP}&key=${API_KEY}`
        )
        .then(function (response) {
            // console.log("response:", response.data)
            // handle success
            res.json(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};
