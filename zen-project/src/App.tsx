import { useState } from 'react';
import './App.css';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
const key: string = import.meta.env.VITE_SOME_KEY;

let QuoteArray: Array<QuoteData> = [];

type QuoteData = {
  author: string;
  category: string;
  quote: string;
};

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>Hello Tanstack!</div>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['quotes'],
    queryFn: () =>
      fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': key,
        },
      }).then((res) => res.json() as unknown as QuoteData),
  });

  if (isLoading) return <div>'Loading...'</div>;

  if (error) return <div>'An error has occurred: '</div>;

  console.log(data);
  

  return (
    <div>
      <h1>"{data[0].quote}"</h1>
      <h2>Author: "{data[0].author}"</h2>
      <h2>Category: "{data[0].category}"</h2>
    </div>
  );
}
