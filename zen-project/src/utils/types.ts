export type QuoteType = {
  author: string;
  category: string;
  quote: string;
};

export type ButtonProps = {
  clickFunction: (category: string) => void;
  category: string;
  hidden: boolean;
};

export type RandomButtonProps = {
  clickFunction: (category: string) => void;
  category: string;
  btnText: string;
};

// export type CategoryButtonProps = {
//   visible: boolean
// }