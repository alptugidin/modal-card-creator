import { createSlice } from '@reduxjs/toolkit';

export const targetingSlice = createSlice({
  name: 'targeting',
  initialState: {
    seconds: 0,
    scroll: 0,
    source: '',
    languages: ['English', 'French', 'Russian', 'Arabic', 'Spanish', 'Chinese'],
  },
  reducers: {

  },
});

export default targetingSlice.reducer;
