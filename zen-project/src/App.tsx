import React from 'react';
import { useState } from 'react';
import './App.css';
import {
  useQuery,
} from '@tanstack/react-query';
import Button from './components/Button/Button';



const key: string = import.meta.env.VITE_SOME_KEY;

type QuoteData = {
  author: string;
  category: string;
  quote: string;
};

type MyArray = Array<QuoteData>;

export default function App() {


  //Change States somewhere in app

  return (
    <>
      <div>Hello Tanstack!</div>
      <RandomQuote/>
      <TestQuote/>
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
        .then((data) => data as MyArray),
  });

  if (isLoading) return <div>'Loading...'</div>;

  if (error) return <div>'An error has occurred: '</div>;

  if (!data) return null;

  return (
    <div>
      <h1>"{data[0].quote}"</h1>
      <h2>Author: "{data[0].author}"</h2>
      <h2>Category: "{data[0].category}"</h2>
    </div>
  );
}
function TestQuote() {

  const [category, setCategory] = React.useState();
  const [limit, setLimit] = React.useState();

  const { isLoading, error, data } = useQuery({
    queryKey: ['quotes', category, limit],
    queryFn: () =>
      fetch('https://api.api-ninjas.com/v1/quotes?category=' + category + '&limit=' + limit, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': key,
        },
      })
        .then((res) => res.json())
        .then((data) => data as MyArray),
  });
  
  // .then((res) => res.json())
  // .then((data) => data as MyArray),


  if (isLoading) return <div>'Loading...'</div>;

  if (error instanceof Error) return <div>'An error has occurred: '</div>;

  if (!data && data == undefined) return null;

  console.log(data);
  

  return (
    <div>
      Return of the div
    </div>
  )
  
}
