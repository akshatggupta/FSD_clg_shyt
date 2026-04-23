// app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Create a router
const router = express.Router();

// Basic GET route
router.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Example POST route
router.post('/data', (req, res) => {
  const body = req.body;
  res.json({ message: 'Data received successfully', data: body });
});

// Example PUT route
router.put('/update/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Updated item with id ${id}`, newData: req.body });
});

// Example DELETE route
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Deleted item with id ${id}` });
});

// Use the router
app.use('/api', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
