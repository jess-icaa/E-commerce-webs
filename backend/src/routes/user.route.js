const express = require('express');
// const { CreateUser } = require('../controllers/user.controller');
const upload = require('../middlewares/multer.js');
// const CreateUser = require('../controllers/multer.js');
const {
    CreateUser,
    verifyUserController,
} = require('../controllers/user.controller.js');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/create-user', upload.single('file'), CreateUser);
router.get('/activation/:token', verifyUserController);
    
//     async (req, res) => {
//     const { token } = req.params;
//     try{
//         if(verifyUser(token)){
//             return res.status(200).cookie();
//         }
//         return res.status(403).send({message: 'token expired' });
//     } catch (er) {
//         return res.status(403).send({ message: er.message });
//     }
// });

// const verifyUser = () => {
//     const verify = jwt.verify(toke, process.env.SECRET_KEY);
//     if (verify) {
//         return verify;
//     } else {
//         return false;
//     }
// };
module.exports = router;