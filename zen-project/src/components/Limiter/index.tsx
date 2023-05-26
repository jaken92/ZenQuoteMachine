import React from 'react';

export const Limiter = (props: { limitCallback: (arg0: number) => void }) => {
  const limits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [limitValue, setLimitValue] = React.useState(1);

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    // Converts the "target.value"-string to a number.
    setLimitValue(+target.value);
    props.limitCallback(limitValue);
  };

  return (
    <div>
      <label>
        Limit:
        <select value={limitValue} onChange={handleChange}>
          {limits.map((currentLimit, index) => (
            <option
              value={currentLimit}
              // Converts the tcurrentLimit"-number to a string.
              label={currentLimit.toString()}
              key={index}
            ></option>
          ))}
        </select>
      </label>
    </div>
  );
};
