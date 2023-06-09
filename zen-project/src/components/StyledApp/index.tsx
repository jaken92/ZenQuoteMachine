import styled from 'styled-components';

export const StyledApp = styled.div`
  padding: 0 !important;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin: 0 auto;
  width: 80%;
  text-align: center;

  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }

  .quote-section {
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    font-family: 'Arvo';
    font-size: 6rem;
    text-shadow: 5px 5px lightgray;
    color: rgb(125, 125, 255);
    margin: 0;
    padding: 0px;
  }

  h3 {
    color: white;
    font-family: 'Epilogue';
    font-weight: 600;
    font-size: 2rem;
  }
  h4 {
    color: white;
    font-family: 'EpilogueItalic';
    font-weight: 500;
  }

  label,
  p {
    color: white;
    font-family: 'Epilogue';
  }

  .quote {
    font-family: 'EpilogueItalic';
  }

  .show-hide-categories {
    font-family: 'Epilogue';
    font-weight: 400;
    box-shadow: 5px 5px lightgray;
    transition: box-shadow 0.15s ease;
    margin-bottom: 1rem;
    cursor: pointer;
    border-radius: 5px;

    height: 1.875rem;
    border: none;
    background-color: rgb(125, 125, 255);
    color: white;

    &:hover {
      box-shadow: 2px 3px lightgray;
    }

    &:active {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 1023px) {
    h1 {
      font-size: 4rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 3.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 427px) {
    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1rem;
    }

    h4,
    p {
      font-size: 0.75rem;
    }
  }
`;
