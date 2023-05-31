import { ButtonProps } from '../../utils/types';
import styled from 'styled-components';

export const Button: React.FC<ButtonProps> = ({
  category,
  clickFunction,
}) => {
  const upperCaseCategory =
    category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <StyledButton
      value={category}
      onClick={() => clickFunction(category)}
    >
      {upperCaseCategory}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-family: 'Epilogue';
  font-weight: 400;
  box-shadow: 5px 5px lightgray;
  transition: box-shadow 0.15s ease;
  margin: 5px 10px;
  cursor: pointer;
  border-radius: 5px;

  height: 30px;
  border: none;
  background-color: rgb(125, 125, 255);
  color: white;

  &:hover {
    box-shadow: 2px 3px lightgray;
  }

  &:active {
    box-shadow: none;
  }
`;
