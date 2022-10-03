import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const appearanceSlice = createSlice({
  name: 'appearance',
  initialState: {
    size: 'Medium',
    position: 4,
    activeColor: '#7D4AEA',
    style: {
      textColor: '#000000',
      themeColor: '#7D4AEA',
      otherTextColor: '#777777',
      borderColor: '#DDDDDD',
      backgroundColor: '#ffffff',
    },
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

    changeStyle: (state, action) => {
      state.style = { ...state.style, [action.payload.name]: action.payload.value };
    },

  },
});

export const {
  changeSize, changePosition, setActiveColor, changeStyle,
} = appearanceSlice.actions;
export default appearanceSlice.reducer;
