import React from 'react';
import './App.css';
import { Button, Limiter} from './components';
import { QuoteType } from './utils/types';
import { useQuery } from '@tanstack/react-query';
import categories from './utils/categories';

export default function App() {

  const [category, setCategory] = React.useState<string>('');
  const [limit, setLimit] = React.useState<number>(1);


  const key: string = import.meta.env.VITE_API_KEY;
  
  function Quote(props: { category: string; limit?: number }) {
  //  Function to test passing of props as states. Returns mapped PropsArray.

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['quotes', props.category],
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
        .then((data) => data as QuoteType[]),
        refetchOnWindowFocus: false,
    });

  

  if (isLoading) return <div>Loading ...</div>;

  if (error instanceof Error) return <div>An error has occurred: </div>;

  if (!data) return <div>No data found.</div>;


  return (
    <div>
      {data.map((item: QuoteType, index: number) => (

        <div key={index}>
          <p>Quote: "{item.quote}"</p>
          <p>Author: "{item.author}"</p>
          <p>Category: "{item.category.charAt(0).toUpperCase() + item.category.slice(1)}"</p>
        </div>
      ))}
    </div>
  );
}


  //  Default values of the states category and limit are set within the last paranthesis.

  const quoteCategories: string[] = categories;

  const handleBtnClick = (category: string) => {
    setCategory(category);
  };

  // This function will pick up the value from when the "Limiter" changes value, and set a new state in "Limit".
  function handleLimitCallback(val: number) {
    setLimit(val);
  }



  return (
    <>
      <h1>Quote Machine</h1>
      <Quote category={category} limit={limit} />
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
