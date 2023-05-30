import React from 'react';

// I won't lie. I'm not at all sure what Typscript does here (arg0, WTF?), but here we add the function "limtiCallback" as a prop, thus making it possible to send the current value in the drop-down menu back to App.tsx, via the handleLimitCallback-function in App.tsx:

export const Limiter = (props: { limitCallback: (arg0: number) => void }) => {
  // The fetch-limit on our chosen API goes from "1" to "10".
  const limits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Initial value of "1" in the drop down-menu.
  const [limitValue, setLimitValue] = React.useState(1);

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    // Converts the "target.value"-string to a number.
    setLimitValue(+target.value);
    props.limitCallback(+target.value);
  };

  return (
    <div>
      <label>
        Show me this many quotes:
        <select value={limitValue} onChange={handleChange}>
          {limits.map((currentLimit, index) => (
            <option
              value={currentLimit}
              // Converts the currentLimit"-number to a string.
              label={currentLimit.toString()}
              key={index}
            ></option>
          ))}
        </select>
      </label>
      <p>
        <label>
          Show me this many quotes:
          <input type="radio" name="myRadio" value="1" />1
        </label>
        <label>
          <input type="radio" name="myRadio" value="3" />3
        </label>
        <label>
          <input type="radio" name="myRadio" value="5" />5
        </label>
      </p>
    </div>
  );
};
