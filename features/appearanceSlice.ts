import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const appearanceSlice = createSlice({
  name: 'appearance',
  initialState: {
    size: 'Medium',
    position: 4,
    colors: [
      '#000',
      '#777777',
      '#F37C34',
      '#DDDDDD',
      '#7D4AEA',
    ],
    activeColor: '#7D4AEA',
  },
  reducers: {
    changeSize: (state, action:PayloadAction<string>) => {
      state.size = action.payload;
    },

    changePosition: (state, action:PayloadAction<number>) => {
      state.position = action.payload;
    },

    setActiveColor: (state, action) => {
      state.activeColor = action.payload;
    },

  },
});

export const { changeSize, changePosition, setActiveColor } = appearanceSlice.actions;
export default appearanceSlice.reducer;
