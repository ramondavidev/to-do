const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    done: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('todo', ToDoSchema);