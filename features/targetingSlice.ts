import { createSlice } from '@reduxjs/toolkit';

interface TargetingSliceTypes {
  seconds: number;
  scroll: number,
  source: string,
  languages: string[],
  selectedLanguages: string[],
  visitorDevice: {desktop:boolean, mobile: boolean}
}

const initialState:TargetingSliceTypes = {
  seconds: 0,
  scroll: 0,
  source: '',
  languages: ['English', 'French', 'German', 'Polish', 'Dutch', 'Finnish', 'Arabic', 'Russian', 'Spanish'],
  selectedLanguages: [],
  visitorDevice: {
    desktop: false,
    mobile: false,
  },
};
export const targetingSlice = createSlice({
  name: 'targeting',
  initialState,
  reducers: {
    setDesktopDevice: (state) => {
      state.visitorDevice.desktop = !state.visitorDevice.desktop;
    },
    setMobileDevice: (state) => {
      state.visitorDevice.mobile = !state.visitorDevice.mobile;
    },
    setLanguage: (state, action) => {
      const check = state.selectedLanguages.some((e) => e === action.payload);
      if (!check) {
        state.selectedLanguages.push(action.payload);
      } else {
        state.selectedLanguages = state.selectedLanguages.filter((lang) => lang !== action.payload);
      }
    },
    clearAllLanguages: (state) => {
      state.selectedLanguages = [];
    },
    addAllLanguages: (state) => {
      state.selectedLanguages = state.languages;
    },
  },
});

export const {
  setDesktopDevice, setMobileDevice, setLanguage, clearAllLanguages, addAllLanguages,
} = targetingSlice.actions;
export default targetingSlice.reducer;
