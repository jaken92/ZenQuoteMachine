import styled from 'styled-components';

export const StyledCategories = styled.section`
  position: relative;
  margin-bottom: 1rem;
  grid-template-columns: repeat(6, 1fr);
  display: grid;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
