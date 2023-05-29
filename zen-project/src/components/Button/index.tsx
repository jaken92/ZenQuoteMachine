import './Button.css';
import { ButtonProps } from '../../utils/types';

export const Button: React.FC<ButtonProps> = ({ category, clickFunction }) => {
  const upperCaseCategory =
    category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <button value={category} onClick={() => clickFunction(category)}>
      {upperCaseCategory}
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
