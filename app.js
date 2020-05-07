// // import mongoose from 'mongoose';


const mongoose = require('mongoose');
const express = require("express");
const app = express();

const authRoutes = require("./routes/auth");




mongoose.connect("mongodb+srv://oluwafaith:yondaime@1@cluster0-d6z6r.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(result => {
    console.log("Database connected");
    app.listen(3005);
}).catch(err => console.log(err));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(authRoutes);

app.use((req, res) => {

    res.send("<h1>Welcome to my app</h1>");

});