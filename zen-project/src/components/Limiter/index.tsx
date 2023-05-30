import React from 'react';

// I won't lie. I'm not at all sure what Typscript does here (arg0, WTF?), but here we add the function "limtiCallback" as a prop, thus making it possible to send the current value in the drop-down menu back to App.tsx, via the handleLimitCallback-function in App.tsx:

export const Limiter = (props: { limitCallback: (arg0: number) => void }) => {
  // This will set the number simultaneous fetched qoutes to 1, 3 or 5.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = +event.target.value;
    props.limitCallback(value);
  };

  // Returning 3 radio buttons with hard-coded values:
  return (
    <div>
      <label>
        Show me this many quotes:
        <input type="radio" name="myRadio" value="1" onChange={handleChange} />1
      </label>
      <label>
        <input type="radio" name="myRadio" value="3" onChange={handleChange} />3
      </label>
      <label>
        <input type="radio" name="myRadio" value="5" onChange={handleChange} />5
      </label>
    </div>
  );
};
