import React from 'react';
import Book from './Book';

const BookList = (props) => {

  const listOfBooks = props.books.map((bookData, index) => {
    return <Book
      bookData={ bookData }
      key={index}
      index={index}
      removeBook={props.removeBook}
    />
  });

  return (
    <div id='book-list'>
      { listOfBooks }
    </div>
  );
}

export default BookList;
