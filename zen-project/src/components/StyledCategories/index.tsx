import styled from 'styled-components';

export const StyledCategories = styled.section`
  position: relative;
  margin-bottom: 1rem;
  grid-template-columns: repeat(6, 1fr);
  display: grid;

  @media screen and(max-width: 767px) {
    .categories {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
