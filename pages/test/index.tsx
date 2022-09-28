import React from 'react';
import Modal1 from '../../components/ModalCardGenerator/Modals/Modal1';

const Test = () => (
  <div className="bg-gray-500 flex h-screen gap-5">
    <Modal1 size="sm" color="black" />
    <Modal1 size="md" color="default" />
    <Modal1 size="lg" color="darkgrey" />
  </div>
);

export default Test;
