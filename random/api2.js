const express = require('express');
const app = express();
const port = 8888;
app.use(express.json());

let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }

];
app.get('/users', (req, res) => {
    res.json(users);
});
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(b => b.id === userId);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(b => b.id === userId);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(b => b.id === userId);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.json({ message: 'User deleted' });
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});




app.listen(port, () => {   
    console.log(`Server is running on http://localhost:${port}`);


});
