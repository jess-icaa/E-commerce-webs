const ErrorHandler = require('../utils/ErrorHandler.js');
const UserModel = require('../models/user.model.js');
const transporter = require('../utils/sendmail.js');
const jwt = require('jsonwebtoken');``

require('dotenv').config({
    path: '../config/.env',
});

async function CreateUser(req, res) {
    const {Name, email, password} = req.body;

    const CheckUserPresent = await UserModel.findOne({
        email: email,
    });

    if (CheckUserPresent) {
        const error = new ErrorHandler('User already exists', 400);


        return res.status(404).send({
            message: error.message,
            status: error.statusCode,
            success: false,
        });
    }

    const newUSer = new UserModel({
        Name: Name,
        email: email,
        password: password,
    });

    const data = {
        Name,
        email,
        password,
    }

    const token = generateToken(data)
    await transporter.sendMail({
        to: 'jessicashalomin@gmail.com',
        from: 'jessicashalomin@gmail.com',
        subject: 'verification email sent for follow along project',
        text: 'Text',
        html: `<h1>Hello World http://localhoast:5173/activation/${token} </h1>`
    })

    await transporter.sendMail({
        to: 'jessicashalomin@kalvium.community',
        from: 'jessicashalomin@gmail.com',
        subject: 'verification email - follow along',
        text: 'Text',
        html: <h1>Hello world https://localhost:5173/activation/{token} </h1>
    })
    await newUSer.save();
    return res.send('User Created Successfully');
}

const generateToken = (data) => {
    const token = jwt.sign({name: data.name, email: data.email },
        process.env.SECRET_KEY);
    return token;
};

const verifyUser = (token) => {
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    if (verify) {
        return verify;
    } else {
        return false;
    }
};

async function verifyUserController(req, res) {
    const { token } = req.params;
    try {
        if (verifyUser(token)) {
            return res
            .status(200)
            .cookie('token', token)
            .json({ token, success: true });
        }
        return res.status(403).send({ message: 'token expired' });
    } catch (er) {
        return res.status(403).send({ message: er.message });
    }    
}

module.exports = { CreateUser, verifyUserController };