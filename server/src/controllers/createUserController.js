const UserModel = require("../models/user")



module.exports = createUserContoller = async (req, res) => {
    const newUser = new UserModel({
        name: "test user",
        cities: ['londra', 'istanbul']
    });
    const createdUser = await newUser.save();
    res.json(createdUser)

}
