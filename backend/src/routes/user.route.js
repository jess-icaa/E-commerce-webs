const express = require('express');
const multer = require('multer');
const {
    CreateUser,
    verifyUserController,
    signup,
    login,
    getUserData,
    AddAddressController,
} = require('../controllers/user.controller.js');
const jwt = require('jsonwebtoken');
const verifyUser = require('jwt-verify');
const upload = multer({ dest: 'temp-uploads/' });
const router = express.Router();

router.post('/create-user', upload.single('file'), CreateUser);
router.get('/activation/:token', verifyUserController);

router.post('/signup', upload.single('file'), signup);
router.post('/login', login);

router.get('/user-data', verifyUser, getUserData);

router.post('/add-address', verifyUser , AddAddressController);

module.exports = router;