const express=require('express');
const verifyUser=require('../middlewares/jwt-verify');
const router=express.Router();
const { AddToCartController, getProducts } = require('../controllers/cart.controller');
router.post('/add-to-cart', verifyUser, getProducts);

module.exports=router;