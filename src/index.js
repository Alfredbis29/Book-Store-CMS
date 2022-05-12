import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import rootReducer from './reducers';

import './index.css';

const allbooks = [
  {
    id: Math.floor(Math.random() * 101),
    title: 'The Cat in the Hat',
    category: 'Learning',
  },
  {
    id: Math.floor(Math.random() * 101),
    title: 'The house of cofee',
    category: 'Biography',
  },
  {
    id: Math.floor(Math.random() * 101),
    title: 'My story',
    category: 'History',
  },
  {
    id: Math.floor(Math.random() * 101),
    title: 'The diable',
    category: 'Horror',
  },
  {
    id: Math.floor(Math.random() * 101),
    title: 'My maths',
    category: 'Learning',
  },
  {
    id: Math.floor(Math.random() * 101),
    title: 'Matrix',
    category: 'Sci-Fi',
  },
  {
    id: Math.floor(Math.random() * 101),
    title: 'Fast and Furious',
    category: 'Action',
  },
];
if (!JSON.parse(localStorage.getItem('books'))) {
  localStorage.setItem('books', JSON.stringify(allbooks));
}

const initialState = {
  books: JSON.parse(localStorage.getItem('books')),
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
