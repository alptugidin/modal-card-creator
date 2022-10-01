import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/store';
import {
  changeBackgroundColor,
  changeBorderColor, changeOtherTextColor,
  changeTextColor,
  changeThemeColor,
} from '../../features/appearanceSlice';
import Modal25 from '../../components/ModalCardGenerator/Modals/Modal25';
import Modal26 from '../../components/ModalCardGenerator/Modals/Modal26';
import Modal27 from '../../components/ModalCardGenerator/Modals/Modal27';

const Test = () => {
  const activeColor = useAppSelector((state) => state.appearance.activeColor);
  const [col, setCol] = useState('#000000');
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-600 h-screen">
      <Modal27 inStory={false} />
      <p>bg</p>
      <input className=" rounded-lg" type="color" value={col} onChange={(e) => dispatch(changeBackgroundColor(e.target.value))} />
      <p>text</p>
      <input className=" rounded-lg" type="color" value={col} onChange={(e) => dispatch(changeTextColor(e.target.value))} />
      <p>border</p>
      <input className=" rounded-lg" type="color" value={col} onChange={(e) => dispatch(changeBorderColor(e.target.value))} />
      <p>theme</p>
      <input className=" rounded-lg" type="color" value={col} onChange={(e) => dispatch(changeThemeColor(e.target.value))} />
      <p>other text</p>
      <input className=" rounded-lg" type="color" value={col} onChange={(e) => dispatch(changeOtherTextColor(e.target.value))} />
    </div>
  );
};

export default Test;
