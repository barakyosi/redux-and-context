import React, { useEffect } from 'react';
import { useCounter } from './index';

export default () => {
  const { state } = useCounter();
  useEffect(() => {
    console.log('ContextBottomCounter Rerender');
  });

  return (
    <div>
      {state.count}
    </div>
  );
}
