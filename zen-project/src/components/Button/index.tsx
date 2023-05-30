import { ButtonProps } from '../../utils/types';
import styled from 'styled-components';

export const Button: React.FC<ButtonProps> = ({
  hidden,
  category,
  clickFunction,
}) => {
  const upperCaseCategory =
    category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <CategoryButton
      hidden={hidden}
      value={category}
      onClick={() => clickFunction(category)}
    >
      {upperCaseCategory}
    </CategoryButton>
  );
};

const CategoryButton = styled.button`
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
  /* display: ${(props) => (props.hidden ? 'none' : 'inline')}; */
  transform: translateX(${(props) => (props.hidden ? '-100%' : '0%')});

  &:hover {
    box-shadow: 2px 3px lightgray;
  }

  &:active {
    box-shadow: none;
  }
`;
