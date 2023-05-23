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

type QuoteProps = {
  author: string,
  category: string,
  quote: string,
};

type PropsArray = Array<QuoteProps>;

export default function App() {
  const [category, setCategory] = React.useState<string>('');
  const [limit, setLimit] = React.useState<number>(0);

  const quoteCategories: string[] = categories;
  // console.log(categories, category, limit);

  return (
    <>
      <h1>Quote Machine</h1>
      <RandomQuote />
      <TestQuote category={category}/>
      <section className="categories">
        {quoteCategories.map((quoteCategory: string, index: number) => (
          <Button key={index} category={quoteCategory} />
        ))}
      </section>
      <Limiter />
    </>
  );
}

function RandomQuote() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['quotes'],
    queryFn: () =>
      fetch('https://api.api-ninjas.com/v1/quotes/', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': key,
        },
      })
        .then((res) => res.json())
        .then((data) => data as PropsArray),
  });

  if (isLoading) return <div>'Loading...'</div>;

  if (error) return <div>'An error has occurred: '</div>;

  if (!data) return null;

  return (
    <div>
      <p>"{data[0].quote}"</p>
      <p>Author: "{data[0].author}"</p>
      <p>Category: "{data[0].category}"</p>
    </div>
  );
}
function TestQuote(props: any) {
  // const [category, setCategory] = React.useState<string>();
  // const [limit, setLimit] = React.useState<number>();

  const { isLoading, error, data } = useQuery({
    queryKey: ['quotes', props.category, props.limit],
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
        .then((data) => data as PropsArray),
  });

  if (isLoading) return <div>'Loading...'</div>;

  if (error instanceof Error) return <div>'An error has occurred: '</div>;

  if (!data && data == undefined) return null;

  console.log("TestQuote:", data);
  
  return (
    <div>
    <h1>{data[0].category}</h1>
    </div>
  )
  
}
