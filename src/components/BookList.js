import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import { fetchBook } from '../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, []);
  return (
    <>
      {books.map((book) => (
        <Books
          key={book.iteme_id}
          id={book.iteme_id}
          title={book.title}
          category={book.category}
          author={book.author}
        />
      ))}
    </>
  );
};

export default BookList;
