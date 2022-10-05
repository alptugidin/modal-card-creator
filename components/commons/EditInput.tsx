import React, { useState } from 'react';

interface EditInputProps {
  // eslint-disable-next-line react/require-default-props
  isActive?:boolean,
  // eslint-disable-next-line react/require-default-props
  placeholder?:string,
  edit(value:string): void,
  // eslint-disable-next-line react/require-default-props
  type?:string
}

const EditInput = ({
  isActive = false, placeholder = '', edit, type = 'text',
}:EditInputProps) => {
  const fn = () => {};
  return (
    <form
      className="mt-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type={type}
        onChange={(e) => edit(e.target.value)}
        className="border outline-none rounded-lg p-1 w-full focus:border-purple-500 pl-3"
        placeholder={placeholder}
      />
    </form>
  );
};

export default EditInput;
