import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import books from './books/books';

const root = combineReducers({ books });

const store = createStore(
  root,
  applyMiddleware(thunk),
);

export default store;
