const express = require('express');
// const { CreateUser } = require('../controllers/user.controller');
const upload = require('../middlewares/multer.js');
const CreateUser = require('../controllers/multer.js');
const router = express.Router();

router.post('/create-user', upload.single('file'));

// module.exports = router;

export default router;