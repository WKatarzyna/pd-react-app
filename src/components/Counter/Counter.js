import { useContext } from 'react';

import useCounter from './useCounter';
import { Theme } from '../../App';

function Counter({ initialValue = 1 }) {

  // using property aliases
  const { count: count1, decrement: decrement1, increment: increment1 } = useCounter(initialValue);
  // const { count: count2, decrement: decrement2, increment: increment2 } = useCounter(13, 5);

  // using properties
  // const counterData1 = useCounter(1);
  // const count1 = counterData1.count;
  // const decrement1 = counterData1.decrement;
  // const increment1 = counterData1.increment;

  // const counterData2 = useCounter(13, 5);
  // const count2 = counterData2.count;
  // const decrement2 = counterData2.decrement;
  // const increment2 = counterData2.increment;

  const theme = useContext(Theme);

  return (
    <div>
      <p style={{ color: theme.color }}>Current value: {count1}</p>
      <button onClick={decrement1}>➖</button>
      <button onClick={increment1}>➕</button>
    </div>
  );

  // return (
  //   <Theme.Consumer>
  //     {values => (
  //       <div>
  //         <p style={{ color: values.color }}>Current value: {count1}</p>
  //         <button onClick={decrement1}>➖</button>
  //         <button onClick={increment1}>➕</button>
  //       </div>
  //     )}
  //   </Theme.Consumer>
  // );
}

export default Counter;
