import React from 'react';

export const RenderExample: React.FC = () => {
  return (
    <div>
      {false}
      {true}
      {null}
      {undefined}
      {0}
      {/*  0 will render */}
      {''}
      {/*  '' will render */}
    </div>
  );
};

type ConditionalRenderProps = {
  showMessage: boolean;
};

export const ConditionalRender: React.FC<ConditionalRenderProps> = ({
  showMessage,
}) => {
  return (
    <div>
      <h1>Welcome!</h1>
      {showMessage && <h2>Thank you for visiting!</h2>}
    </div>
  );
};

type ValueProps = {
  value: number | null;
};

export const ConditionalRenderWithZero: React.FC<ValueProps> = ({ value }) => {
  return (
    <div>
      <h1>Conditional Rendering With Zero</h1>
      <p>{!!value && <span>Value is {value}</span>}</p>
    </div>
  );
};

type UserProps = {
  userName?: string;
  points?: number;
};

export const ConditionalRenderingWithOr: React.FC<UserProps> = ({
  userName,
  points,
}) => {
  return (
    <div>
      <h1>Welcome, {userName ?? 'Guest'}</h1>
      <p>You have {points ?? 100} points.</p>
      {/* Beresiko 0 dianggap falsy dan akan menampilkan 100 */}
    </div>
  );
};

type UserStatusProps = {
  isLoggedIn: boolean;
};

export const ConditionalRenderWithTernary: React.FC<UserStatusProps> = ({
  isLoggedIn,
}) => {
  return (
    <div>
      <h1>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</h1>
    </div>
  );
};
