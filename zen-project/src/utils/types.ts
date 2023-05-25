export type QuoteType = {
    author: string;
    category: string;
    quote: string;
  };

export type ButtonProps = {
    fn: () => void;
    category: string;
    limit?: number;
};

export type QuoteArray = Array<QuoteType>;