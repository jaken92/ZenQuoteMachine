import { useState } from 'react';
import './App.css';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import {FetchRandomQuote, FetchQuoteByCategory, FetchQuotes} from './utils/queries';



const key: string = import.meta.env.VITE_SOME_KEY;

type QuoteData = {
  author: string;
  category: string;
  quote: string;
};

type MyArray = Array<QuoteData>;

const queryClient = new QueryClient();

export default function App() {

  //useState for category
  //useState for Limit

  //Change States somewhere in app
  
  return (
    <>
      <div>Hello Tanstack!</div>
      <RandomQuote />
    </>
  );
}

function RandomQuote() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['quotes'],
    queryFn: () =>
      fetch('https://api.api-ninjas.com/v1/quotes', {
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
  console.log(data);

  return (
    <div>
      <h1>"{data[0].quote}"</h1>
      <h2>Author: "{data[0].author}"</h2>
      <h2>Category: "{data[0].category}"</h2>
    </div>
  );
}

