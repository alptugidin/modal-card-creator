import React from 'react';

const EditInput = () => {
  const fn = () => {};
  return (
    <form
      className="mt-3"
    >
      <input
        type="text"
        onChange={() => {}}
        className="border outline-none rounded-lg p-1 w-full focus:border-purple-500 focus:outline-2 focus:outline-purple-400/40 pl-3"
        value="Test field"
      />
    </form>
  );
};

export default EditInput;
