import styled from 'styled-components';

export const StyledApp = styled.div`
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

  .quote-wrapper {
    margin: 0 auto;
    width: 80%;
    text-align: center;
  }
  h1 {
    font-family: 'Arvo';
    font-size: 6rem;
    text-shadow: 5px 5px lightgray;
    color: rgb(125, 125, 255);
    margin: 0;
  }

  h3 {
    color: white;
    font-family: 'Epilogue';
    font-weight: 600;
    display: inline;
    margin-right: 0.2rem;
    font-size: 3rem;
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

  .show-categories {
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
    display: ${(props) => (props.hidden ? 'none' : 'inline')};

    &:hover {
      box-shadow: 2px 3px lightgray;
    }

    &:active {
      box-shadow: none;
    }
  }

  .show-hide-categories {
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
    transform: translateX(${(props) => (props.hidden ? '-100%' : '0%')});

    &:hover {
      box-shadow: 2px 3px lightgray;
    }

    &:active {
      box-shadow: none;
    }
  }

  @media (max-width: 767px) {
    .categories {
      grid-template-rows: repeat(3, 1fr);
    }
  }
`;
