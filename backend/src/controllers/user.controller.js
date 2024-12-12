import { transporter } from '../utilities/sendmail.js';

const ErrorHandler = require('../utilities/ErrorHandler.js');
const UserModel = require('../models/user.model.js');


export async function CreateUser(req, res) {
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

    await transporter.sendMail({
        to: '',
        from: 'jessicashalomin@gmail.com',
        subject: 'verification email - follow along',
        text: 'Text',
        html: <h1>Hello world https://localhost:5173/activation/{token} </h1>
    })
    await newUSer.save();
    return res.send('User Created Successfully');
}