import React, { Component } from 'react';

class BookForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const newBook = {
      author: evt.target.author.value,
      title: evt.target.title.value,
    }
    this.props.addBook(newBook);
    this.reset();
  }

  handleInputChange(evt) {
    const field = evt.target.id;
    const value = evt.target.value;
    this.setState({ [field]: value });
  }

  reset() {
    this.setState({
      author: '',
      title: ''
    });
  }
  
  render() {
    return (
      <form onSubmit={ this.handleFormSubmit.bind(this) }>
        <label htmlFor='author'>Author:</label>
        <input
          type='text'
          name='author'
          id='author'
          value={this.state.author}
          onChange={this.handleInputChange}
        />

        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          name='title'
          id='title'
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <input type='submit' value='Add Book' />
      </form>
    );
  }

};

export default BookForm;
