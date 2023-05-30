import { RandomButtonProps } from '../../utils/types';
import styled from 'styled-components';

export const RandomButton: React.FC<RandomButtonProps> = ({
  category,
  clickFunction,
  btnText,
}) => {
  return (
    <div>
      <StyledRandomBtn value={category} onClick={() => clickFunction(category)}>
        {btnText}
      </StyledRandomBtn>
    </div>
  );
};

const StyledRandomBtn = styled.button`
  background: linear-gradient(-45deg, #c86344, #e73c7e, #23a6d5, #04cc29);
  background-size: 300% 300%;
  animation: gradient 5s ease infinite;
  cursor: pointer;
  margin: 0 auto;
  width: 30%;
  height: 5vh;
  border-radius: 20px;

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
  .StyledRandomBtn:hover {
    background: hotpink;
  }
`;
