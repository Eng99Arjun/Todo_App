const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://@cluster0.w8zzo.mongodb.net/TodoDB");
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('TodoDB', todoSchema);

module.exports = {
    todo
}
