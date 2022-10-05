import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const appearanceSlice = createSlice({
  name: 'appearance',
  initialState: {
    size: '1',
    sizeText: 'Medium',
    position: 4,
    activeColor: '#7D4AEA',
    imgUrl: '',
    style: {
      backgroundColor: '#ffffff',
      themeColor: '#7D4AEA',
      otherTextColor: '#777777',
      borderColor: '#DDDDDD',
      textColor: '#000000',
    },
  },
  reducers: {
    changeSize: (state, action:PayloadAction<number>) => {
      if (action.payload === 0) {
        state.size = '0.8';
        state.sizeText = 'Small';
      } else if (action.payload === 1) {
        state.size = '1';
        state.sizeText = 'Medium';
      } else {
        state.size = '1.1';
        state.sizeText = 'Large';
      }
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

    setImgUrl: (state, action) => {
      state.imgUrl = action.payload;
    },

  },
});

export const {
  changeSize, changePosition, setActiveColor, changeStyle, setImgUrl,
} = appearanceSlice.actions;
export default appearanceSlice.reducer;
