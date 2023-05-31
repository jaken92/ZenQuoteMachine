export type QuoteType = {
  author: string;
  category: string;
  quote: string;
};

// clickFunction returns void as it only alters states where it is called. 

export type ButtonProps = {
  clickFunction: (category: string) => void;
  category: string;
};

export type RandomButtonProps = {
  clickFunction: (category: string) => void;
  category: string;
  btnText: string;
};
