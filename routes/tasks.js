const express = require('express');
const taskModel = require('../models/taskModel');
const router = express.Router();
const Task = require('../models/taskModel');

// GET Tasks
router.get('/', async (req, res) => {
    try{
        console.log(`Inside the GET /tasks route`)
        const tasks = await Task.find();
        res.json(tasks)
    }
    catch(err){
        res.json({message:err})
    }
    
});

// Post Tasks 
router.post('/', (req, res) => {
    console.log(`Inside the POST /tasks route`)
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        category: req.body.category,
        priority: req.body.priority,
        status: req.body.status
    });

    task.save().then(data => {
        //for postman debugging
        res.json(data)
    }).catch(err => {
        console.log(`ERROR: ${err}`)
    })
});

module.exports = router;