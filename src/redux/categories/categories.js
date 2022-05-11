const CHECK_STATUS = 'bookstore/src/redux/categories/CHECK_STATUS';

export const checkStatus = () => ({ type: CHECK_STATUS });

const categories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'under construction';
    default:
      return state;
  }
};

export default categories;
