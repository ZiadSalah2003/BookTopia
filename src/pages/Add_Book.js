import React, { useState } from 'react';
import axios from 'axios';

function AddBook() {
  const [book, setBook] = useState({ title: '', author: '', description: '', image: '' });

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:5000/books', book);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={book.title} onChange={handleChange} />
      </label>
      <label>
        Author:
        <input type="text" name="author" value={book.author} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={book.description} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={book.image} onChange={handleChange} />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;