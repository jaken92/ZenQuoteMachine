import React from 'react';
import './App.css';
import { Button, Limiter, Quote} from "./components";
import categories from './utils/categories';

export default function App() {
  const [category, setCategory] = React.useState<string>('');
  const [limit, setLimit] = React.useState<number>(1);

  //  Default values of the states category and limit are set within the last paranthesis.

  const quoteCategories: string[] = categories;

  function handleBtnClick(quoteCategory: string) {
    setCategory(quoteCategory);
  }

  return (
    <>
      <h1>Quote Machine</h1>
      <Quote category={category} limit={limit} />
      <section className="categories">
        {quoteCategories.map((quoteCategory: string, index: number) => (
          <Button
            fn={handleBtnClick('funny')}
            key={index}
            category={quoteCategory}
          />
        ))}
      </section>
      <Limiter />
    </>
  );
}
