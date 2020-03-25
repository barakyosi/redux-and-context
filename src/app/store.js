import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/redux/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
