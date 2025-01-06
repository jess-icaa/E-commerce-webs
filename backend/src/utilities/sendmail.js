const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
        user: 'jessicashalomin@gmail.com',
        pass: 'rwft zvrg obhg kswu',
    },
});

module.exports = transporter;

