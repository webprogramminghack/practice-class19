import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

type ChildProps = {
  fetchData: () => void;
};

export const ChildComponent: React.FC<ChildProps> = ({ fetchData }) => {
  useEffect(() => {
    console.log('fetchData function changed, executing useEffect');
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
};

type Props = {
  count?: number;
};

// wrong approach
export const WithoutUseCallback: React.FC<Props> = ({ count = 0 }) => {
  const [text, setText] = useState('');

  const fetchData = useCallback(() => {
    console.log('Fetching data, count is:', count);
  }, [count]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type='text' value={text} onChange={onChangeText} />
      <ChildComponent fetchData={fetchData} />
    </div>
  );
};
