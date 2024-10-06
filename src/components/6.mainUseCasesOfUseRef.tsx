import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button } from '../Button';

export const UseRefExample: React.FC = () => {
  const [name, setName] = useState('');

  const edwinRef = useRef(0);

  console.log(edwinRef.current);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleOnClickButton = () => {
    edwinRef.current = Math.random();
  };

  useEffect(() => {
    console.log('Re-render');
  });

  return (
    <div>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' value={name} onChange={handleChange} />
      <Button onClick={handleOnClickButton}>Change Ref</Button>
    </div>
  );
};

// useState
// mempertahankan update data di next render
// menyebabkan render ketika data berubah

// useRef
// mempertahankan update data di next render
// tidak menyebabkan render ketika data berubah

export const CounterUsingRef: React.FC = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(count);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <div>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>{' '}
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
    </div>
  );
};

export const CounterUsingState: React.FC = () => {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(count);

  useEffect(() => {
    setPrevCount(count);
  }, [count]);

  return (
    <div>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>{' '}
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
    </div>
  );
};
