import styled from 'styled-components';

const StyledApp = styled.div`
  margin: 0 !important;
  padding: 0 !important;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  h1 {
    font-family: 'Arvo';
    font-size: 4rem;
    text-shadow: 5px 5px lightgray;
    color: rgb(125, 125, 255);
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
  .quote-section {
    /* display: flex;
    flex-direction: column; */
  }

  @media (max-width: 767px) {
    .categories {
      grid-template-rows: repeat(3, 1fr);
    }
  }
`;

export default StyledApp;
