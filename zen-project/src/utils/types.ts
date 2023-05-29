import { MouseEventHandler } from 'react';

export type QuoteType = {
  author: string;
  category: string;
  quote: string;
};

export type QuoteArray = Array<QuoteType>;

export type ButtonProps = {
  clickFunction: (category: string) => void;
  category: string;
};
