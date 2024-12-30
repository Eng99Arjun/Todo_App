const express = require('express');
const app = express();
const { createTodo, updateTodo} = require('./types');
const { todo } = require('./db');


app.use(express.json());

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    });
});


app.post('/todo', async (req, res) => {    
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        console.error('Validation Error:', parsedPayload.error); // Log the error details
        res.status(411).json({
            message: 'Invalid data provided',
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        message: 'Todo created successfully'    
    });
});



app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.parse(updatePayload);
        if(!parsedPayload.success){
            res.status(411).json({
                message: 'Invalid data provided',
                data: parsedPayload.error
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        message: 'Todo Marked as completed'
    })
});


app.listen(5000, () => {
    console.log('Server listening on port 5000');
});
