import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import {Counter} from './Counter';

export default () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <Counter
        count={count}
        dispatch={dispatch}
        decrement={decrement}
        increment={increment}
        incrementByAmount={incrementByAmount}
        onIncrementAsync={(amount) => dispatch(incrementAsync(amount))}
    />
  );
}
