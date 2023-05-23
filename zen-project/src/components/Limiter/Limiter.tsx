import React from 'react';
import { useState } from 'react';

const Limiter = () => {
  const limits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [limitValue, setLimitValue] = React.useState(1);

  const handleChange = (event: React.ChangeEvent) => {
    setLimitValue(event.target.value);
  };

  return (
    <div>
      <label>
        Limit:
        <select value={limitValue} onChange={handleChange}>
          {limits.map((currentLimit, index) => (
            <option
              value={currentLimit}
              label={currentLimit}
              key={index}
            ></option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Limiter;
