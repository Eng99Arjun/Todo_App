const express = require('express');
const app = express();
const { createTodo, updateTodo} = require('./types');


app.use(express.json());

app.get('/todos', (req, res) => {
    res.json({ message: 'Hello from server!' });
    });


app.post('/todo', (req, res) => {    
    const createPayload =req.body;
    const parsedPayload = createTodo.parse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: 'Invalid data provided',
            data: parsedPayload.error
        })
        return;
    }
    });


app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.parse(updatePayload);
        if(!parsedPayload.success){
            res.status(411).json({
                message: 'Invalid data provided',
                data: parsedPayload.error
        })
        return;
    }

    });


app.listen(5000, () => {
    console.log('Server listening on port 5000');
    });
