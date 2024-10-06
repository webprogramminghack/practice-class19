// import React, { useEffect, useState } from 'react';

// export const ConditionalHookExample: React.FC = () => {
//   const [count, setCount] = useState(0);

//   if (count > 5) {
//     // ❌ Salah: Memanggil hook di dalam kondisi
//     const [message, setMessage] = useState('');
//     setMessage('Count is greater than 5!');
//   }

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// };

// const ConditionalHookExample2: React.FC = () => {
//   const [count, setCount] = useState(0);
//   const [message, setMessage] = useState('');

//   // wrong useEffect (conditionally, not in the top level)
//   if (count > 5) {
//     useEffect(() => {
//       setMessage('Count is greater than 5!');
//     }, []);
//   }

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <h2>{message}</h2>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// };

// const IncorrectLoopHookUsage: React.FC = () => {
//   const items = [1, 2, 3];

//   items.forEach(() => {
//     // ❌ Salah: Memanggil hook di dalam loop
//     const [item, setItem] = useState(0);
//   });

//   return <div>Check console for errors!</div>;
// };

// const IncorrectSwitchHookUsage: React.FC = () => {
//   const condition = 1;

//   switch (condition) {
//     case 1:
//       // ❌ Salah: Memanggil hook di dalam switch
//       const [state1, setState1] = useState(0);
//       break;
//     case 2:
//       const [state2, setState2] = useState(0);
//       break;
//   }

//   return <div>Check console for errors!</div>;
// };

// const IncorrectCallbackHookUsage: React.FC = () => {
//   const handleClick = () => {
//     // ❌ Salah: Memanggil hook di dalam callback
//     const [clicked, setClicked] = useState(false);
//     setClicked(true);
//   };

//   return <button onClick={handleClick}>Click Me</button>;
// };
