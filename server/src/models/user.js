const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
    {
        name: String,
        cities: Array,
    },
    { collection: 'weathers' }
);

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
