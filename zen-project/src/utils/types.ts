export type QuoteType = {
  author: string;
  category: string;
  quote: string;
};

export type ButtonProps = {
  clickFunction: (category: string) => void;
  category: string;
};

export type RandomButtonProps = {
  clickFunction: (category: string) => void;
  category: string;
  btnText: string;
};