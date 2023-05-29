const express=require('express');
const routes=express.Router();
const {getImage,setImage}=require('../controller/imageController');
const { upload } = require('../utils/imageUploderWithMulter');

routes.post('/saveimage',upload.single("image"),getImage)

routes.get('/getimage',setImage)


module.exports =routes;