import { createSlice } from '@reduxjs/toolkit';

interface TargetingSliceTypes {
  targeting:{
    visitorDevice: {
      all:boolean,
      desktop:boolean,
      mobile: boolean
    },
    seconds :{
      isActive:boolean,
      value:number
    },
    scroll: {
      isActive:boolean,
      value:number
    },
    source: {
      isActive:boolean,
      value:string
    },
    languages: {
      isActive:boolean,
      value:string[],
    },
    selectedLanguages: string[],
    exitIntent: boolean
    webhook: string
    sendClick:boolean,
    sendForm:boolean
  }
}

const initialState:TargetingSliceTypes = {
  targeting: {
    visitorDevice: {
      all: false,
      desktop: false,
      mobile: false,
    },
    seconds: {
      isActive: false,
      value: 0,
    },
    scroll: {
      isActive: false,
      value: 0,
    },
    source: {
      isActive: false,
      value: '',
    },
    languages: {
      isActive: false,
      value: ['English', 'French', 'German', 'Polish', 'Dutch', 'Finnish', 'Arabic', 'Russian', 'Spanish'],
    },
    selectedLanguages: [],
    exitIntent: false,
    webhook: '',
    sendClick: false,
    sendForm: false,
  },
};
export const targetingSlice = createSlice({
  name: 'targeting',
  initialState,
  reducers: {
    setDesktopDevice: (state) => {
      state.targeting.visitorDevice.desktop = !state.targeting.visitorDevice.desktop;
    },

    setMobileDevice: (state) => {
      state.targeting.visitorDevice.mobile = !state.targeting.visitorDevice.mobile;
    },

    isVisitorDevice: (state) => {
      state.targeting.visitorDevice.all = !state.targeting.visitorDevice.all;
      if (state.targeting.visitorDevice.all === false) {
        state.targeting.visitorDevice.desktop = false;
        state.targeting.visitorDevice.mobile = false;
      }
    },

    setLanguage: (state, action) => {
      const check = state.targeting.selectedLanguages.some((e) => e === action.payload);
      if (!check) {
        state.targeting.selectedLanguages.push(action.payload);
      } else {
        // eslint-disable-next-line max-len
        state.targeting.selectedLanguages = state.targeting.selectedLanguages.filter((lang) => lang !== action.payload);
      }
    },

    setSource: (state, action) => {
      state.targeting.source.value = action.payload;
    },

    isActiveSource: (state) => {
      state.targeting.source.isActive = !state.targeting.source.isActive;
    },

    clearAllLanguages: (state) => {
      state.targeting.selectedLanguages = [];
    },

    addAllLanguages: (state) => {
      state.targeting.selectedLanguages = state.targeting.languages.value;
    },

    isActiveSeconds: (state) => {
      state.targeting.seconds.isActive = !state.targeting.seconds.isActive;
      if (state.targeting.seconds.isActive) {
        if (state.targeting.scroll.isActive) {
          state.targeting.scroll.isActive = false;
        }
      }
    },

    setActiveSecondsValue: (state, action) => {
      state.targeting.seconds.value = parseInt(action.payload, 10);
    },

    isActiveScroll: (state) => {
      state.targeting.scroll.isActive = !state.targeting.scroll.isActive;
      if (state.targeting.scroll.isActive) {
        if (state.targeting.seconds.isActive) {
          state.targeting.seconds.isActive = false;
        }
      }
    },

    setScrollValue: (state, action) => {
      state.targeting.scroll.value = parseInt(action.payload, 10);
    },

    isActiveLanguages: (state) => {
      state.targeting.languages.isActive = !state.targeting.languages.isActive;
    },

    setExitIntent: (state) => {
      state.targeting.exitIntent = !state.targeting.exitIntent;
    },
    setWebHook: (state, action) => {
      state.targeting.webhook = action.payload;
    },
    setSendClick: (state) => {
      state.targeting.sendClick = !state.targeting.sendClick;
    },
    setSendForm: (state) => {
      state.targeting.sendForm = !state.targeting.sendForm;
    },
  },
});

export const {
  setDesktopDevice,
  setMobileDevice,
  setLanguage,
  clearAllLanguages,
  addAllLanguages,
  isActiveSeconds,
  setActiveSecondsValue,
  isActiveScroll,
  setScrollValue,
  setSource,
  isActiveSource,
  isActiveLanguages,
  isVisitorDevice,
  setExitIntent,
  setWebHook,
  setSendClick,
  setSendForm,
} = targetingSlice.actions;
export default targetingSlice.reducer;
