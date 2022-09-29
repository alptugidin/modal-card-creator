import React from 'react';
import Modal3 from '../../components/ModalCardGenerator/Modals/Modal3';

const Test = () => (
  <div className="bg-gray-500 flex h-screen gap-5">
    <Modal3 size="sm" color="black" />
    <Modal3 size="md" color="default" />
    <Modal3 size="lg" color="darkgrey" />
  </div>
);

export default Test;
