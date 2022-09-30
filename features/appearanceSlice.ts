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
    style: {
      textColor: '#000',
      themeColor: '#7D4AEA',
      otherTextColor: '#777777',
      borderColor: '#DDDDDD',
      backgroundColor: '#fff',
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

    changeTextColor: (state, action) => {
      state.style.textColor = action.payload;
    },

    changeThemeColor: (state, action) => {
      state.style.themeColor = action.payload;
    },

    changeBorderColor: (state, action) => {
      state.style.borderColor = action.payload;
    },

    changeOtherTextColor: (state, action) => {
      state.style.otherTextColor = action.payload;
    },

    changeBackgroundColor: (state, action) => {
      state.style.backgroundColor = action.payload;
    },

  },
});

export const {
  changeSize, changePosition, setActiveColor, changeBackgroundColor, changeBorderColor, changeThemeColor, changeTextColor, changeOtherTextColor,
} = appearanceSlice.actions;
export default appearanceSlice.reducer;
