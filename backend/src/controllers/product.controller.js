const multer = require('multer');
const cloudinary = require('../utils/cloudinary.js');
const fs = require('fs');
const ProductModel = require('../models/product.model.js');

const createProductController = async (req, res) => {
  const {
    title,
    description,
    rating,
    discoutPrice,
    originalPrice,
    quantity,
    category,
  } = req.body;

  try {
    const arrayImage = req.files.map(async (singleFile, index) => {
      return cloudinary.uploader
      .upload(singleFile.path, {
        folder: 'uploads',
      })
      .then((result) => {
        fs.unlinkSync(singleFile.path);
      });
    });

    const dataImages = await Promise.all(arrayImage);
    const StoreProductDetails = await ProductModel.create({
      title,
      description,
      rating,
      discountedPrice,
      originalPrice,
      quantity,
      category,
      images: dataImages,
    });
    return res.status(201).send({
      message: 'Image Successfully Uploaded',
      sucess: true,
      dataImages,
      StoreProductDetails,
    });
  } catch (er) {
    if (er instanceof multer.MulterError) {
      return res.status(400).send({
        message: 'Multer error please send image less than 5',
        sucess: false,
      });
    }

    return res.status(500).send({ message: er.message, success: false });
  }
};

module.exports = { createProductController };