import React, { useState } from 'react';
import { Button } from '../Button';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Current count: {count}</h1>
      <Button onClick={handleIncrement}>Increment</Button>
    </div>
  );
};
