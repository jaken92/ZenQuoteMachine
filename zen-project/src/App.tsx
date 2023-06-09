import React from 'react';
import { Button, Limiter, Quote, RandomButton, StyledCategories} from './components';
import { QuoteType } from './utils/types';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import categories from './utils/categories';
import Globalstyle from './fonts/fonts.ts';

//setting initial value for currentCat to use as a condition for refetch in handleBtnClick.
let currentCat: string = '';

export default function App() {
  // decides category of quotes in the useQuery - default random
  const [category, setCategory] = React.useState<string>('');
  // decides amount of quotes in the useQuery - default 1
  const [limit, setLimit] = React.useState<number>(1);
  // categoryHidden is used by the StyledCategories section. setCategoryHidden is toggled onClick.
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

  // Handles the different results and sets the variable message accordingly

  let message: string = '';

  if (isLoading) message = 'Loading ...';

  if (error instanceof Error) message = 'An error has occurred.';

  if (!data && !isLoading && !error) message = 'No data found.';

  //  Default values of the states category and limit are set within the last paranthesis.

  type Categories = (typeof categories)[number];
  const quoteCategories: readonly Categories[] = categories;

  // Sets the window-position to top when a button is clicked. 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // setCategory will trigger useQuery as the state changes. 
  // If the clicked category is the same as the previous, which wouldn't change the state, it will fetch a new quote.
  const handleBtnClick = (category: string) => {
    if (currentCat === category) {
      refetch();
    } else {
      setCategory(category);
    }
    scrollToTop();
    currentCat = category;
  };

  // This function will pick up the value from when the "Limiter" changes value, and set a new state in "Limit".
  function handleLimitCallback(val: number) {
    setLimit(val);
  }

  // This is for defining the start and end point of animation. 
  // Defines constants used by animations with framer-motion
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const div = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // App is wrapped within GlobalStyle to get access the different fonts. 
  // Contains mapped out quotes from the fetch (data) and categories from "utils/categories.ts"

  return (
    <>
      <Globalstyle />
      <h1>Quote Machine</h1>

      <RandomButton
        clickFunction={handleBtnClick}
        category={''}
        btnText={'Random Quote'}/>

      <motion.section 
        className="quote-section container"
        variants={container}
        initial="hidden"
        animate="visible">

        {isLoading || error || !data ? (<motion.p className='item' variants={div}>{message}</motion.p>) 
          : (data.map((item: QuoteType, index: number) => (
              <motion.div key={index} className='item' variants={div}>
                <Quote
                  author={item.author}
                  category={item.category}
                  quote={item.quote}
                />
              </motion.div>
        )))}

        <Limiter limitCallback={handleLimitCallback} />

      </motion.section>

      <button
        className="show-hide-categories"
        onClick={() => { categoryHidden ? setCategoryHidden(false) : setCategoryHidden(true)}}>{categoryHidden ? 'Show' : 'Hide'} Categories 
      </button>

      <StyledCategories
        as={motion.section}
        animate={categoryHidden ? 'closed' : 'open'}
        variants={variants}
        initial={false}>

        {quoteCategories.map((quoteCategory: string, index: number) => (
          <Button
            clickFunction={handleBtnClick}
            key={index}
            category={quoteCategory}/>))}

      </StyledCategories>
    </>)
}
