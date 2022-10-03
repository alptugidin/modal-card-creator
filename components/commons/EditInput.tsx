import React, { useState } from 'react';

interface EditInputProps {
  placeholder:string;
  edit(value:string): void;
}

const EditInput = ({ placeholder, edit }:EditInputProps) => {
  const [textValue, setTextValue] = useState('');
  const fn = () => {};
  return (
    <form
      className="mt-3"
    >
      <input
        type="text"
        onChange={(e) => edit(e.target.value)}
        className="border outline-none rounded-lg p-1 w-full focus:border-purple-500 focus:outline-2 focus:outline-purple-400/40 pl-3"
        placeholder={placeholder}
      />
    </form>
  );
};

export default EditInput;
