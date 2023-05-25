import './Button.css';

type ButtonProps = {
  fn: () => void;
  category: string;
  limit?: number;
};

export const Button: React.FC<ButtonProps> = ({ category, fn, limit }) => {
  return (
    <button value={category} onClick={fn}>
      {category}
    </button>
  );
};

// const Button = (props: { category: string; limit?: number }) => {
//   const { category, limit } = props;
//   const upperCaseCategory =
//     category.charAt(0).toUpperCase() + category.slice(1);
//   return (
//     <button
//       onClick={() => console.log('Category: ', category, 'Limit: ', limit)}
//     >
//       {upperCaseCategory}
//     </button>
//   );
// };
