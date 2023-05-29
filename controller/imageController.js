const ImageModel = require("../model/imageModel");
const dotenv = require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const getImage = async (req, res) => {
  if (req.file) {
    try {
      const { name } = req.body;
      // Configuration
      cloudinary.config({
        cloud_name:process.env.CLD_NAME,
        api_key: process.env.CLD_API_KEY,
        api_secret: process.env.CLD_API_SEC,
      });

      // Upload
      const response = await cloudinary.uploader.upload(req.file.path, {
        folder: "demo folder",
        resource_type: "image",
      });
      const sec_path = response.secure_url;
      const uploadImage = await ImageModel.create({
        url: sec_path,
        name: name,
      });
      res.status(200).json({status:1, msg: "Image uploaded successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).json( {status:0, msg: "Error while Uploading" });
    }
  } else {
    res.status(400).json({status:0,  msg: "File not found" });
  }
};



const setImage =async (req, res) => {
  try {
    const allImages= await ImageModel.find();
  res.status(200).json({status:1,images:allImages})
} catch (err) {
    res.status(400).json({status:0,msg:"Error occure"});
    console.log(err);
    
  }
};

module.exports = { getImage, setImage };
