import React from 'react';
import {Counter} from '../redux/Counter';
import { useCounter } from './index';

export default () => {
  const { state, dispatch } = useCounter();

  return (
    <Counter
        count={state.count}
        dispatch={dispatch}
        decrement={() => ({type: 'decrement'})}
        increment={() => ({type: 'increment'})}
        incrementByAmount={(count)=>({type: 'incrementByAmount', payload: count })}
        onIncrementAsync={(count) => {
          setTimeout(() => {
            dispatch({type: 'incrementByAmount', payload: count });
          }, 1000);
        }}
    />
  );
}
