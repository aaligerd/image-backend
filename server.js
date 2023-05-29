const express=require('express');
const mongoose= require('mongoose');
const dotenv=require('dotenv').config();
const path= require('path');
const cors=require('cors');



const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors('*'));


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to MongoDB');
    const port= process.env.PORT;

    app.use("/image",require('./route/imageRoute'))

    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`);
    });
})