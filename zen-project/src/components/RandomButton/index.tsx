import { RandomButtonProps } from '../../utils/types';

export const RandomButton: React.FC<RandomButtonProps> = ({
  category,
  clickFunction,
  btnText,
}) => {
  return (
    <button value={category} onClick={() => clickFunction(category)}>
      {btnText}
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
