import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Book({ bookId }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`http://localhost:5000/books/${bookId}`);
      setBook(response.data);
    };

    fetchBook();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <><div className="Welcome-to mb-4">
               <h1 style={{textAlign: "center"}}>
        <strong>
          <span style={{color: "#FFFFFF"}}>
            {book.title}
          </span>
        </strong>
      </h1>
      <div className="book">
      <h2>Author: <Link to={`/authors/${book.author}`}>{book.author}</Link></h2>
    </div>
      </div>
            <div className="text-light wel m-4 mx-5 text ">
            <p className="pragraph-container">
        {book.description}
            </p>
                <div className="book">
      <img src={book.imageUrl} alt={book.title} className="pragraph-image" />
    </div>
    
            </div>
            </>
    
  );
}

export default Book;