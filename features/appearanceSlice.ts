import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const appearanceSlice = createSlice({
  name: 'appearance',
  initialState: {
    size: 'Medium',
    position: 4,
  },
  reducers: {
    changeSize: (state, action:PayloadAction<string>) => {
      state.size = action.payload;
    },

    changePosition: (state, action:PayloadAction<number>) => {
      state.position = action.payload;
    },

  },
});

export const { changeSize, changePosition } = appearanceSlice.actions;
export default appearanceSlice.reducer;
