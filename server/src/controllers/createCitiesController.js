const CityModel = require('../models/city');
const axios = require('axios');

module.exports = createCitiesContoller = async (req, res) => {
    await axios
        .get('https://countriesnow.space/api/v0.1/countries/population/cities')
        .then(function (response) {
            console.log('response:', response.data.data.length);
            // let list = response.data.data.slice(0, 99);
            let list = response.data.data;
            let promiseList = [];
            list.forEach((item) => {
                promiseList.push(
                    new CityModel({
                        city: String(item.city).toLowerCase(),
                        country: String(item.country).toLowerCase(),
                    }).save()
                );
            });
            Promise.all(promiseList)
                .then(() => {
                    res.json('success');
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};
