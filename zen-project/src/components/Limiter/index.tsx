import React from 'react';
import styled from 'styled-components';

const StyledLimiter = styled.div`
  margin: 2rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .radio-buttons {
    width: 15rem;
    display: flex;
    justify-content: space-between;
  }
  .label-radio-buttons {
    font-family: 'Epilogue';
  }
`;

// I won't lie. I'm not at all sure what Typscript does here (arg0, WTF?), but here we add the function "limtiCallback" as a prop, thus making it possible to send the current value in the drop-down menu back to App.tsx, via the handleLimitCallback-function in App.tsx:
export const Limiter = (props: { limitCallback: (arg0: number) => void }) => {
  // This will set the number simultaneous fetched qoutes to 1, 3 or 5.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = +event.target.value;
    props.limitCallback(value);
  };

  // Returning 3 radio buttons with hard-coded values. Buttton with value of "1" is set to default:
  return (
    <StyledLimiter>
      <h4 className="label-radio-buttons">Show me this many quotes:</h4>
      <div className="radio-buttons">
        <label>
          1
          <input
            className="radio-button"
            type="radio"
            name="myRadio"
            value="1"
            onChange={handleChange}
            defaultChecked
          />
        </label>
        <label>
          3
          <input
            className="radio-button"
            type="radio"
            name="myRadio"
            value="3"
            onChange={handleChange}
          />
        </label>
        <label>
          5
          <input
            className="radio-button"
            type="radio"
            name="myRadio"
            value="5"
            onChange={handleChange}
          />
        </label>
      </div>
    </StyledLimiter>
  );
};
