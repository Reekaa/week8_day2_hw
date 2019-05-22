import { connect } from 'react-redux';
import BookForm from '../components/BookForm.js';

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => {
      dispatch({
        type: 'ADD_BOOK',
        book
      })
    }
  };
};

export default connect(null, mapDispatchToProps)(BookForm);
