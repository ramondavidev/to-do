const express = require('express');
const router = express.Router();

const ToDo = require('../models/to-do');

//return all to-dos
router.get('/', async(req, res) => {
    const todos = await ToDo.find();
    return res.json(todos);
});

//return a single to-do
router.get('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const todo = await ToDo.findById(id);
        return res.json(todo);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: 'something went wrong' });
    }
});

//create a to do
router.post('/', async(req, res) => {
    try {

        const { title, description } =  req.body;

        const todo = new ToDo({
            title,
            description
        });

        await todo.save();

        return res.json(todo);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: 'something went wrong' });
        
    }
});



//edit a to-do
router.put('/:id', async (req, res) => {
    try {
        const todo = await ToDo.findById(req.params.id);
        const { title, description, done } =  req.body;

        if(title) todo.title = title;
        if(description) todo.description = description;
        todo.done = done;

        const todoReturned = await todo.save();
    
        return res.json(todoReturned);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: 'something went wrong' });
    }
});




//Delete a to-do
router.delete('/:id', async(req, res) => {
    try {
        await ToDo.findByIdAndDelete(req.params.id);
        return res.json({ msg: 'TO-DO removido com sucesso' });
    } catch (error) {
        console.error(error);
        return res.json({ error: error.message });
    }
});

module.exports = router;
