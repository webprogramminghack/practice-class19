import React, { Fragment } from 'react';

export const FragmentExample: React.FC = () => {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
};

const TableHeaderItems: React.FC = () => {
  return (
    <>
      <th>Item</th>
      <th>Price</th>
    </>
  );
};

type TableRowItemsProps = {
  item: string;
  price: number;
};

export const TableRowItems: React.FC<TableRowItemsProps> = ({
  item,
  price,
}) => {
  return (
    <>
      <td>{item}</td>
      <td>{price}</td>
    </>
  );
};

export const Table: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <TableHeaderItems />
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableRowItems item='Apple' price={1} />
        </tr>
        <tr>
          <TableRowItems item='Orange' price={0.5} />
        </tr>
      </tbody>
    </table>
  );
};

const Items: React.FC = () => {
  const fruits = ['Apple', 'Orange', 'Banana'];

  return (
    <>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </>
  );
};

const ListItems: React.FC = () => {
  return (
    <ul>
      <Items />
    </ul>
  );
};
