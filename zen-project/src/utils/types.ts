import { MouseEventHandler } from "react";

export type QuoteType = {
  author: string;
  category: string;
  quote: string;
};

export type ButtonProps = {
  fn: (category: MouseEventHandler) => void;
  category: string;
  limit?: number;
};

export type QuoteArray = Array<QuoteType>;
