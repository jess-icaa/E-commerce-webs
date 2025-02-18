const express = require('express');
const router = express.Router();
const verifyUser = require('../middlewares/jwt-verify.js');
const {
    GetUserOrderController,
    CreateOrderController,
} = require('../controllers/order.controller.js');

router.get('/user-orders-data', verifyUser, GetUserOrderController);
router.post('/confirm-order', verifyUser, CreateOrderController);

module.exports = router;

