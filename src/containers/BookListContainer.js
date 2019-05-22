import { connect } from 'react-redux';
import BookList from '../components/BookList';

const mapStateToProps = (state) => {
  return {
    books: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: (bookIndex) => {
      dispatch({
        type: 'REMOVE_BOOK',
        bookIndex
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
