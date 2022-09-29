import React from 'react';
import { useAppSelector } from '../../redux/store';
import Modal13 from '../../components/ModalCardGenerator/Modals/Modal13';

const Test = () => {
  const activeColor = useAppSelector((state) => state.appearance.activeColor);
  return (
    <div>
      <Modal13 size="sm" color={activeColor} />
    </div>
  );
};

export default Test;
