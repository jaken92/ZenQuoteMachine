import { useQuery } from '@tanstack/react-query';
import { QuoteType, QuoteArray } from "../../utils/types";

const key: string = import.meta.env.VITE_API_KEY;

export function Quote(props: { category: string; limit?: number }) {
    //  Function to test passing of props as states. Returns mapped PropsArray.
  
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
          .then((data) => data as QuoteArray),
    });
  
    if (isLoading) return <div>Loading ...</div>;
  
    if (error instanceof Error) return <div>An error has occurred: </div>;
  
    if (!data) return <div>No data found.</div>;
  
    console.log('data: PropsArray = ', data);
  
    //  Goal is to not return html here but within the app-component return.
    //  Temporary test -> should return a managable PropsArray
    //  Make isLoading, error and !data (undefined) return as PropsArray as well.
  
    return (
      <div>
        {data.map((item: QuoteType, index: number) => (
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
  