import { configureStore } from '@reduxjs/toolkit';
import selectedReducer from '../features/selected';

export const store = configureStore({
  reducer: {
    selected: selectedReducer,
  },
});
