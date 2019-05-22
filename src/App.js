import React, { Component } from 'react';
import BookListContainer from './containers/BookListContainer';
import NewBookContainer from './containers/NewBookContainer';

class App extends Component{
  render(){
    return (
      <div>
        <h1>Reading list</h1>
        <NewBookContainer />
        <h2>Book List</h2>
        <BookListContainer />
      </div>
    );
  }
}

export default App;
