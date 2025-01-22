const ErrorHandler = require('../utilities/ErrorHandler.js');
const UserModel = require('../models/user.model.js');
const transporter = require('../utilities/sendmail.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cloudinary = require('../utilities/cloudinary.js');
const fs = require('fs');

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
        html: `<h1> Hello World http://localhoast:5173/activation/${token} </h1>`
    })

    await newUSer.save();

    return res.send('User Created Successfully');
}
    const generateToken = (data) => {
        const token = jwt.sign({name: data.name, email: data.email, id:data.id },
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
    


const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const checkUserPresentinDB = await UserModel.findOne({ email: email });
        if (checkUserPresentinDB) {
            return setDriver.status(403).send({ message: 'User already present' });
        }
        console.log(req.file, process.env.cloud_name);
        const ImageAddress = await cloudinary.uploader
        .upload(req.file.path, {
            folder: "uploads",
        })
        .then((result) => {
            fs.unlinkSync(req.file.path);
            return result.url;
        }).catch((err) => {console.log(err.message)});
        console.log("url", ImageAddress);

        bcrypt.hash(password, 10, async function (err, hashedPassword) {
            try {
                if (err) {
                    return res.status(403).send({ message: err.message });
                }
                await UserModel.create({ 
                    Name: name,
                    email,
                    password: hashedPassword,
                    avatar: {
                        url: ImageAddress,
                        public_id: `${email}_public_id`,
                    }
                });

                return res.status(201).send({ message: 'User created successfully..' });
            } catch (er) {
                return res.status(500).send({ message: er.message });
            }
        });
    } catch (er) {
        return res.status(500).send({ message: er.message });
    } 
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const checkUserPresentinDB = await UserModel.findOne({ email: email });

        bcrypt.compare(
            password,
            checkUserPresentinDB.password,
            function (err, result) {
                if (err) {
                    return res.status(403).send({ message: er.message, success: false });
                }
                let data = {
                    id: checkUserPresentinDB._id,
                    email,
                    password: checkUserPresentinDB.password,
                };
                const token = generateToken(data);

                return res
                .status(200)
                .cookie('token', token)
                .send({ message: 'User logged in successfully..', success: true });
            }
        );
    } catch (er) {
        return res.status(403).send({ message: er.message, success: false});
    }
};

module.exports = { CreateUser, verifyUserController, signup, login };