import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCount,
} from './counterSlice';

export function BottomCounter() {
  const count = useSelector(state => state.counter.value);
  useEffect(() => {
    console.log('Class: BottomCounter, Function: , Line 10');
  });

  return (
    <div>
      {count}
    </div>
  );
}
