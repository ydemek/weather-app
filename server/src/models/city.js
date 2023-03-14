const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema(
    {
        city: String,
        country: String,
    },
    { collection: 'cities' }
);

const CityModel = mongoose.model('City', CitySchema);

module.exports = CityModel;
