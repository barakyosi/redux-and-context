import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const count = useSelector(state => state.counter.value);
  useEffect(() => {
    console.log('RedutBottomCounter Rerender');
  });

  return (
    <div>
      {count}
    </div>
  );
};
