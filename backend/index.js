const express = require('express');
const app = express();

app.use(express.json());

app.get('/todos', (req, res) => {
    res.json({ message: 'Hello from server!' });
    });


app.post('/todo', (req, res) => {    
    res.json({ message: 'Hello from server!' });
    });


app.put('/completed', (req, res) => {
    res.json({ message: 'Hello from server!' });
    });


app.listen(5000, () => {
    console.log('Server listening on port 5000');
    });
