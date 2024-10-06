import React, { ChangeEvent, MouseEvent } from 'react';

type SearchBarProps = {
  onChange: (value: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input type='text' onChange={handleChange} />;
};

type SelectProps = {
  onChange: (value: string) => void;
};

export const SelectInput: React.FC<SelectProps> = ({ onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value=''>Select on option</option>
      <option value='option1'>Two</option>
      <option value='option2'>Three</option>
    </select>
  );
};

type CheckboxProps = {
  onToggle: (checked: boolean) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({ onToggle }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onToggle(e.target.checked);
  };

  return <input type='checkbox' onChange={handleChange} />;
};
