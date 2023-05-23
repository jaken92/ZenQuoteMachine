import { useState } from 'react';

import {    
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query';

const key: string = import.meta.env.VITE_SOME_KEY;
const queryClient = new QueryClient();

type QuoteData = {
    author: string;
    category: string;
    quote: string;
  };
  
type MyArray = Array<QuoteData>;

export function FetchRandomQuote() {
    const { isLoading, error, data } = useQuery({
      queryKey: ['quotes'],
      queryFn: () =>
        fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': key,
          },
        }).then((res) => res.json())
        .then((data) => data as MyArray),
    });
  
    if (isLoading) return 'Loading ...'
  
    if (error) return 'An error has occurred: ';
  
    console.log(data);
    
    if (!data) return null;

    return data;

}

export function FetchQuoteByCategory(category:string) {
    const { isLoading, error, data } = useQuery({
      queryKey: ['quotes'],
      queryFn: () =>
        fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': key,
          },
        }).then((res) => res.json() as unknown as MyArray),
    });
  
    if (isLoading) return 'Loading ...'
  
    if (error) return 'An error has occurred: ';
  
    console.log(data);
    
    if (data) {
    return data;
  }
}

