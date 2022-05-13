import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Category() {
  const dispatch = useDispatch();
  const checkStatusHandler = () => {
    dispatch(checkStatus());
  };
  const categories = useSelector((state) => state.categories);
  return (
    <div>
      <button type="button" onClick={checkStatusHandler}>Check Status</button>
      <p>{categories}</p>
    </div>
  );
}

export default Category;
