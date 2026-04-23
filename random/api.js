const express = require('express');
const app = express();
const port = 3000;
// app.use(express.json());

let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' }
];
app.get('/books', (req, res) => {
    res.json(books);
});
app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if (book) {
        res.json(book);
    }
    else {
        res.status(404).json({ message: 'Book not found' });
    }
});



app.listen(port, () => {   
    console.log(`Server is running on http://localhost:${port}`);


});
