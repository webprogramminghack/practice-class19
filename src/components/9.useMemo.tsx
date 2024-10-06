import React, { useMemo, useState, useEffect } from 'react';
import { Button } from '../Button';

const factorial = (n: number): number => {
  console.log('calculate the result');
  if (n <= 0) return 1;
  return n * factorial(n - 1);
};

export const UseMemoExample: React.FC = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  const factorialResult = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h1>Example</h1>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>
        Factorial of {number} is: {factorialResult}
      </p>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type something...'
      />
      <p>{text}</p>
    </div>
  );
};

type UserProfileProps = {
  user: { name: string; age: number };
};

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  useEffect(() => {
    console.log('fetching user data');
  }, [user]);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export const WithUseMemo: React.FC = () => {
  const [count, setCount] = useState(0);

  const user = useMemo(() => ({ name: 'John', age: 30 }), []);

  return (
    <div>
      <h1>Without Use Memo Example</h1>
      <UserProfile user={user} />

      <p>Count: {count}</p>
      <Button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </Button>
    </div>
  );
};
