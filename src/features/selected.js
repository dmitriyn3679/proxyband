import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    setSelected: (state, action) => action.payload,
    removeSelected: () => null,
  },
});

export default selectedSlice.reducer;
export const { actions } = selectedSlice;
