import styled from 'styled-components';

const StyledApp = styled.div`

* {
    box-sizing: border-box;
}
body {
    margin: 0;
}
  h1 {
    font-family: 'Arvo';
    font-size: 4rem;
    text-align: center;
    color: #b78eff;
    margin: 0;
  }
  h4 {
    font-family: 'Epilogue';
    font-weight: 600;
    display: inline;
    margin-right: 0.2rem;
  }
  span,
  label,
  p {
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
