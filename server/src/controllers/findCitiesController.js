const CityModel = require('../models/city');
const axios = require('axios');

module.exports = findCitiesContoller = async (req, res) => {
    let regexp = new RegExp('^' + String(req.body.cityName).toLowerCase());
    CityModel.find({ city: regexp })
        .limit(5)
        .exec()
        .then((list) => {
            return res.status(200).json({ list });
        })
        .catch((err) => {
            return res.status(400).json({ message: err });
        });
};
