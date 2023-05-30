import './Button.css';
import { ButtonProps } from '../../utils/types';
import styled from 'styled-components';
import Globalstyle from '../../fonts/fonts';

const StyledButton = styled.button`

font-family: 'Epilogue';
font-weight: 400;

`;

export const Button: React.FC<ButtonProps> = ({ category, clickFunction }) => {
  const upperCaseCategory =
    category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <StyledButton value={category} onClick={() => clickFunction(category)}>
      {upperCaseCategory}
    </StyledButton>
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
