import { useQuery } from '@tanstack/react-query';
import { QuoteType, QuoteArray } from '../../utils/types';

const key: string = import.meta.env.VITE_API_KEY;

export function Quote(props: { category: string; limit?: number }) {
  //  Function to test passing of props as states. Returns mapped PropsArray.

  const { isLoading, error, data } = useQuery({
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
        .then((data) => data as QuoteArray),
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
          <p>Category: "{item.category}"</p>
        </div>
      ))}
    </div>
  );
}
