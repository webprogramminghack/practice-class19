import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

export const ParentComponent: React.FC = () => {
  const [name, setName] = useState('John Doe');

  const changeName = (newName: string) => {
    setName(newName);
  };

  useEffect(() => {
    console.log('Name is changed');
  }, [name]);

  return (
    <div>
      <ChildComponent onNameChange={changeName} />
    </div>
  );
};

type ChildComponentProps = {
  onNameChange: (newName: string) => void;
};

const ChildComponent: React.FC<ChildComponentProps> = ({ onNameChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      onNameChange(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder='Enter new name'
      />
    </div>
  );
};
