const express = require("express");
require('dotenv/config')
// const Course = require("./models/courseModel");
const mongoose = require("mongoose");
const tasksRoute = require('./routes/tasks')
const app = express();
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
    res.send(`we're on home`);
});

app.use(bodyParser.json())
app.use('/tasks', tasksRoute);

mongoose.connect(process.env.DB_CONNECTION_STRING, 
{useNewUrlParser: true},
() => {
    console.log('Connected to the DB!');
    console.log(`Server is running on port: ${process.env.PORT}`)
});

app.listen(process.env.PORT);