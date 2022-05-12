import axios from 'axios';
import initialData from './initialData';

const ADD_BOOK = 'bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/categories/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/src/redux/categories/FETCH_BOOKS';
const appId = 'BgAlXJeczV2Dg6K3sqYO';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const addBook = (book) => async (dispatch) => {
  const { data } = await axios.post(`${baseURL}${appId}/books/`, book, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': 'http://localhost:3000/',
    }
  });

  if (data === 'Created') {
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  }
};

export const removeBook = (id) => async (dispatch) => {
  const { data } = await axios.delete(`${baseURL}${appId}/books/${id}`);
  if (data === 'The book was deleted successfully!') {
    dispatch({
      type: REMOVE_BOOK,
      payload: id,
    });
  }
};

export const fetchBook = () => async (dispatch) => {
  const result = await axios.get(`${baseURL}/apps/${appId}/books`);
  dispatch(
    {
      type: FETCH_BOOKS,
      payload: result.data,
    },
  );
};

const books = (state = initialData, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        ...action.payload,
      }];
    case FETCH_BOOKS: {
      const books = Object.entries(action.payload).map(([key, value]) => {
        const [content] = value;
        return {
          item_id: key,
          ...content,
        };
      });
      return [...state, ...books];
    }
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default books;
