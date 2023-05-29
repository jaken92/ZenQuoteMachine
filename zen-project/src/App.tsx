import React from 'react';
import './App.css';
import { Button, Limiter, Quote } from './components';
import categories from './utils/categories';

export default function App() {
  const [category, setCategory] = React.useState<string>('');
  const [limit, setLimit] = React.useState<number>(1);
  const [getNew, setGetNew] = React.useState<boolean>(false);

  //  Default values of the states category and limit are set within the last paranthesis.

  const quoteCategories: string[] = categories;

  const handleBtnClick = (category: string) => {
    // setGetNew(false);
    setGetNew(true);
    setCategory('');
    setCategory(category);

    console.log(getNew);
  };

  function handleLimitCallback(val: number) {
    setLimit(val);
    console.log(limit);
  }

  return (
    <>
      <h1>Quote Machine</h1>
      <Quote category={category} limit={limit} getNew={getNew} />
      <section className="categories">
        {quoteCategories.map((quoteCategory: string, index: number) => (
          <Button
            clickFunction={handleBtnClick}
            key={index}
            category={quoteCategory}
          />
        ))}
      </section>
      <Limiter limitCallback={handleLimitCallback} />
    </>
  );
}
