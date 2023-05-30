import React from 'react';
import {
  Button,
  Limiter,
  Quote,
  RandomButton,
  StyledCategories,
} from './components';
import { QuoteType } from './utils/types';
import { useQuery } from '@tanstack/react-query';
import categories from './utils/categories';
import Globalstyle from './fonts/fonts.ts';

//setting initial value for currentCat to use as a condition for refetch in handleBtnClick.
let currentCat: string = '';

export default function App() {
  const [category, setCategory] = React.useState<string>('');
  const [limit, setLimit] = React.useState<number>(1);
  const [categoryHidden, setCategoryHidden] = React.useState<boolean>(true);

  const key: string = import.meta.env.VITE_API_KEY;

  //  Function to test passing of props as states. Returns mapped PropsArray.

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['quotes', category],
    queryFn: () =>
      fetch(
        'https://api.api-ninjas.com/v1/quotes?category=' +
          category +
          '&limit=' +
          limit,
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

  let message: string = '';

  if (isLoading) message = 'Loading ...';

  if (error instanceof Error) message = 'An error has occurred.';

  if (!data && !isLoading && !error) message = 'No data found.';

  //  Default values of the states category and limit are set within the last paranthesis.

  type Categories = (typeof categories)[number];
  const quoteCategories: readonly Categories[] = categories;

  const handleBtnClick = (category: string) => {
    if (currentCat === category) {
      refetch();
    } else {
      setCategory(category);
    }
    currentCat = category;
  };

  // This function will pick up the value from when the "Limiter" changes value, and set a new state in "Limit".
  function handleLimitCallback(val: number) {
    setLimit(val);
  }

  return (
    <>
      <Globalstyle />
      <h1>Quote Machine</h1>
      <RandomButton
        clickFunction={handleBtnClick}
        category={''}
        btnText={'Random Quote'}
      />
      <div className="flex-wrapper">
        <section className="quote-section">
          {isLoading || error || !data ? (
            <p>{message}</p>
          ) : (
            data.map((item: QuoteType, index: number) => (
              <div key={index}>
                <Quote
                  author={item.author}
                  category={item.category}
                  quote={item.quote}
                />
              </div>
            ))
          )}
          <Limiter limitCallback={handleLimitCallback} />
        </section>
        <button
          onClick={() => {
            categoryHidden ? setCategoryHidden(false) : setCategoryHidden(true);
          }}
        >
          {categoryHidden ? 'Show' : 'Hide'} Categories
        </button>
        <StyledCategories>
          {quoteCategories.map((quoteCategory: string, index: number) => (
            <Button
              clickFunction={handleBtnClick}
              key={index}
              category={quoteCategory}
              hidden={categoryHidden}
            />
          ))}
        </StyledCategories>
      </div>
    </>
  );
}
