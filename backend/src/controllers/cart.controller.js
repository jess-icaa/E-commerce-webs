const mongoose = require('mongoose');
const UserModel = require('../models/user.model');
const cartModel = require('../models/cart.model');
async function AddToCartControllwer(req, res) {
    const{productId, quantity}=req.body;
    const userId=req.UserId;
    try {
        if(!mongoose.Types.ObjectId.isValid(productId)){
            return res.status(400).send({message: 'Send Valid Product ID', success: false })
        }
        if(!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(400).send({message: 'Send Valid Product ID', success: false })
        }
        const checkUserPresent = await UserModel.findOne({_id:userId});
        if(!checkUserPresent){
            return res.status(401).send({message: 'Send Valid Product ID'})
        }
        const checkIfProdPresent= await cartModel.findOne({ 
            productId: productId,
            userId,
        });
        if(checkIfProdPresent){
            return res.status(400).send({message:'product already present in cart', success: false })
        }
        await cartModel.create({
            productId,
            quantity,
            userId,
        });
        return res 
            .status(201)
            .send({ message: 'Product is successfully created', success: true });
    } catch (err) {
        return res.status(500).send({message: err.message, success:false})
    }
}
async function GetProductsForUser(req, res){
    const userId=req.userId;
    try {
        if(!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(401).send({message:'Unauthorized Please Signup'})
        }
        const checkUserPresent= await UserModel.findOne({_id:userId})
        if(!checkUserPresent){
            return res.status(401).send({message:'Unauthorized Please Signup'})
        }
        const data= await cartModel.find({userId}).populate('productId');
        return res.status(200).send({
            message:'Data is successfully fetched',
            success: true,
            cartData: data,
        })
    } catch (error) {
        return res.status(500).send({message: err.message, success:false})
    }
}

module.exports={AddToCartControllwer, GetProductsForUser};