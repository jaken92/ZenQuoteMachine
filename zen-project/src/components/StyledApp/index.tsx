import styled from 'styled-components';

const StyledApp = styled.div`
  margin: 0 !important;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  align-items: center;


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
    color:rgb(125, 125, 255);
    margin: 0;
  }
  h4 {
    color: white;
    font-family: 'Epilogue';
    font-weight: 600;
    display: inline;
    margin-right: 0.2rem;
  }
  span,
  label,
  p {
    color: white;
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
