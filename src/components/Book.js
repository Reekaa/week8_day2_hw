import React from 'react';

const Book = (props) => {
  const handleDeletBook = (evt) => {
    props.removeBook(props.index);
  }

  const {author, title} = props.bookData;

  return (
    <div className='book'>
      <h4>{author}</h4>
      <h5>{title}</h5>
      <button onClick={ handleDeletBook }>Remove book from list</button>
    </div>
  )
}

export default Book;
