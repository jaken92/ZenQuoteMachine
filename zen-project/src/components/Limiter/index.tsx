import React from 'react';
import styled from 'styled-components';

const StyledLimiter = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  .radio-buttons {
    width: 25%;
    display: flex;
    justify-content: space-between;
  }
`;

// I won't lie. I'm not at all sure what Typscript does here (arg0, WTF?), but here we add the function "limtiCallback" as a prop, thus making it possible to send the current value in the drop-down menu back to App.tsx, via the handleLimitCallback-function in App.tsx:
export const Limiter = (props: { limitCallback: (arg0: number) => void }) => {
  // This will set the number simultaneous fetched qoutes to 1, 3 or 5.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = +event.target.value;
    props.limitCallback(value);
  };

  // Returning 3 radio buttons with hard-coded values:
  return (
    <StyledLimiter>
      <h4>Show me this many quotes:</h4>
      <div className="radio-buttons">
        <label>
          <input
            className="radio-button"
            type="radio"
            name="myRadio"
            value="1"
            onChange={handleChange}
          />
          1
        </label>
        <label>
          <input
            className="radio-button"
            type="radio"
            name="myRadio"
            value="3"
            onChange={handleChange}
          />
          3
        </label>
        <label>
          <input
            className="radio-button"
            type="radio"
            name="myRadio"
            value="5"
            onChange={handleChange}
          />
          5
        </label>
      </div>
    </StyledLimiter>
  );
};
