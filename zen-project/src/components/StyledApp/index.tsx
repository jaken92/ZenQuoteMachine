import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: #2a2626;
  margin: 0 !important;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Arvo';
    font-size: 4rem;
    text-align: center;
  }
  h4 {
    font-family: 'Epilogue';
    font-weight: 600;
    display: inline;
    margin-right: 0.2rem;
  }
  span {
    margin-right: 1rem;
    font-family: 'Epilogue';
  }
  .quote {
    font-family: 'EpilogueItalic';
  }
  .categories {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
  }
  @media (max-width: 767px) {
    .categories {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default StyledApp;
