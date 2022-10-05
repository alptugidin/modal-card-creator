import React, { ReactNode, useEffect } from 'react';
import ImageUploader from '../commons/ImageUploader';
import EditInput from '../commons/EditInput';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { strings } from '../ModalCardGenerator/Modals/stringsIndex';
import { updateText } from '../../features/modalCreateSlice';

const Content = () => {
  const editableTextCount = useAppSelector((state) => state.modalCreate.editableTextCount);
  const editableTexts = useAppSelector((state) => state.modalCreate.editableTexts);
  const dispatch = useAppDispatch();
  return (

    <div className="mt-24">
      <div className="flex items-center gap-4">
        <img src="/stepThree.svg" alt="stepTwo" />
        <span className="font-[Poppins] font-bold text-xl tracking-tight whitespace-pre">
          Content
        </span>
      </div>

      <div className="flex">
        <div className="basis-1/3">
          <div className="mt-7">
            <p className="font-[Inter] font-normal mt-7">Edit your content</p>
          </div>
          <div className="flex flex-col gap-4 mt-3">
            {/* @ts-ignore */}
            {[...Array(editableTextCount).keys()].map((i) => (
              <div key={i.toString()} id={`content-input${i}`}>
                <EditInput
                  edit={(value:string) => dispatch(updateText({ index: i, name: value }))}
                  placeholder={editableTexts[i]}
                />
              </div>
            ))}
          </div>
          <ImageUploader type="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Content;
