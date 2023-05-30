import { RandomButtonProps } from '../../utils/types';
import styled from 'styled-components';

export const RandomButton: React.FC<RandomButtonProps> = ({
  category,
  clickFunction,
  btnText,
}) => {
  return (
    <StyledDiv>
      <StyledRandomBtn value={category} onClick={() => clickFunction(category)}>
        {btnText}
      </StyledRandomBtn>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledRandomBtn = styled.button`
  background: linear-gradient(-45deg, #c86344, #e73c7e, #23a6d5, #04cc29);
  background-size: 300% 300%;
  animation: gradient 5s ease infinite;
  cursor: pointer;
  margin: 0 auto;
  width: 12rem;
  height: 5vh;
  border-radius: 20px;
  box-shadow: 5px 5px 5px gray;
  transition: box-shadow 0.15s ease;
  font-family: 'Epilogue';
  font-weight: 400;
  font-size: 1.3rem;

  &:hover {
    box-shadow: 2px 2px 3px gray;
  }

  &:active {
    box-shadow: none;
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
