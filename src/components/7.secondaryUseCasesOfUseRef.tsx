import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';

export const UseRefExample2: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = 'John';
    }
  }, []); // run only once

  return (
    <div>
      <label htmlFor='name'>Name: </label>
      <input ref={inputRef} type='text' id='name' />
    </div>
  );
};

export const RefCallbackExample: React.FC = () => {
  const [width, setWidth] = useState<number | null>(null);

  const setDivRef = (element: HTMLDivElement | null) => {
    if (element) {
      setWidth(element.getBoundingClientRect().width);
    }
  };

  return (
    <div>
      <div ref={setDivRef}></div>
      <p>Width of the div: {width}px</p>
    </div>
  );
};
