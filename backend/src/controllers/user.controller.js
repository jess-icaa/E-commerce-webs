const ErrorHandler = require('../utilities/ErrorHandler.js');
const UserModel = require('../models/user.model.js');


export async function CreateUser(req, res) {
    const {Name, email, password} = req.body;
    const CheckUserPresent = await UserModel.findOne({
        email: email,
    });

    if (CheckUserPresent) {
        return new ErrorHandler('User already exists', 401);
    }
    new UserModel({
        Name: Name,
        email: email,
        password: password,
    });

    await UserModel.save();
    return res.send('User Created Successfully');
}