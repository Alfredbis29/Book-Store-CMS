import React from "react";

const BookList = () => {
  const books = [
    {
      id: 1,
      title: "Linters",
      author: "alfred",
    },
    {
      id: 2,
      title: "Jsx",
      author: "Audry",
    },
  ];
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} {book.author}
          <button type="button">Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
