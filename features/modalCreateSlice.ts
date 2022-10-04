import { createSlice } from '@reduxjs/toolkit';

interface ModalCreateTypes {
  activeModal:number;
  editableTextCount:number
  editableTexts: string[];
  editedText: {[key:string]:string},
  foo:string | undefined
}

const initialState:ModalCreateTypes = {
  activeModal: 1,
  editableTextCount: 0,
  foo: undefined,
  editableTexts: [],
  editedText: {},
};
export const modalCreateSlice = createSlice({
  name: 'modalCreate',
  initialState,
  reducers: {
    setActiveModal: (state, action) => {
      state.activeModal = action.payload;
    },
    updateEditableTextCount: (state, action) => {
      state.editableTextCount = action.payload;
    },
    updateEditableTexts: (state, action) => {
      state.editableTexts = action.payload;
      state.editedText = { ...action.payload };
    },
    updateText: (state, action) => {
      // eslint-disable-next-line max-len
      state.editedText = { ...state.editedText, [Object.keys(state.editedText)[action.payload.index]]: action.payload.name };
    },
  },
});

export const {
  setActiveModal, updateEditableTextCount, updateEditableTexts, updateText,
} = modalCreateSlice.actions;

export default modalCreateSlice.reducer;
