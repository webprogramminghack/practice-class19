import React, { forwardRef, useEffect, useRef } from 'react';

type CustomInputProps = {
  label: string;
};

const CustomInput = forwardRef<HTMLInputElement | null, CustomInputProps>(
  ({ label }, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input ref={ref} type='text' />
      </div>
    );
  }
);

export const ForwardRefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h1>Forward Ref Example</h1>
      <CustomInput ref={inputRef} label='Enter your name' />
    </div>
  );
};
