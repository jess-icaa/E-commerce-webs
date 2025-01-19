const multer = require('multer');
const express = require('express');
const verifyUser = require('../middlewares/jwt-verify.js');

const {
    createProductController,
    getProductDataController,
    updateProductController,
    getSingleProductDocumentController,
    deleteSingleProduct,
} = require('../controllers/product.controller.js');

const router = express.Router();

const upload = multer({ dest: 'temp-uploads/' });

router.post(
    '/create-product',
    upload.array('files', 5),
    verifyUser,
    createProductController
);

router.get('/get-products',  getProductDataController);
router.put(
    '/update-products/:id', 
    upload.array('files', 5),
    updateProductController
);

router.get('/get-single/:id', getSingleProductDocumentController);
// router.get('/get-products', getProductDataController);
 
router.delete('/:id', deleteSingleProduct);

module.exports = router;

