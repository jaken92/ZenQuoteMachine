import React from 'react';
import { fetchQuotes } from '../../utils/queries';

const Button = (props: { category: string; limit?: number }) => {
  const { category, limit } = props;
  return (
    <button onClick={() => console.log(category + limit)}>{category}</button>
  );
};

export default Button;
