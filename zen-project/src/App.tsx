import React from 'react';
import { useState } from 'react';
import './App.css';
import { useQuery } from '@tanstack/react-query';
// Components --->
import Button from './components/Button/Button';
import Limiter from './components/Limiter/Limiter';
// <--- ---|
import categories from './utils/categories';

const key: string = import.meta.env.VITE_API_KEY;

type Quote = {
  author: string;
  category: string;
  quote: string;
};

type QuoteArray = Array<Quote>;

export default function App() {
  const [category, setCategory] = React.useState<string>('');
  const [limit, setLimit] = React.useState<number>(1);


  //  Default values of the states category and limit are set within the last paranthesis.

  const quoteCategories: string[] = categories;

  function handleBtnClick() {
    setCategory('funny');
  }

  return (
    <>
      <h1>Quote Machine</h1>
      <button onClick={handleBtnClick}>Fetch New</button>
      <Quotes category={category} limit={limit} />
      <section className="categories">
        {quoteCategories.map((quoteCategory: string, index: number) => (
          <Button key={index} category={quoteCategory} />
        ))}
      </section>
      <Limiter />
    </>
  );
}

function Quotes(props: { category: string; limit?: number }) {
  //  Function to test passing of props as states. Returns mapped PropsArray.

  const { isLoading, error, data } = useQuery({
    queryKey: ['quotes', quoteProps.category, quoteProps.limit],
    queryFn: () => 
      fetch(
        'https://api.api-ninjas.com/v1/quotes?category=' +
          props.category +
          '&limit=' +
          props.limit,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': key,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => data as QuoteArray),
  });

  
  if (isLoading) return <div>Loading ...</div>

  if (error instanceof Error) return <div>An error has occurred: </div>;
  
  if (!data) return <div>No data found.</div>;

  console.log('data: PropsArray = ', data);

  //  Goal is to not return html here but within the app-component return.
  //  Temporary test -> should return a managable PropsArray
  //  Make isLoading, error and !data (undefined) return as PropsArray as well.

  return (
    <div>
      {data.map((item: Quote, index: number) => (
        <div key={index}>
          <p>PropsArray.length: {data.length}</p>
          <p>Quote: "{item.quote}"</p>
          <p>Author: "{item.author}"</p>
          <p>Category: "{item.category}"</p>
        </div>
      ))}
    </div>
  );
}
