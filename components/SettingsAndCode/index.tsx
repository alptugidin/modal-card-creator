import React, { createRef, useRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/store';
import EditInput from '../commons/EditInput';
import { setSendClick, setSendForm, setWebHook } from '../../features/targetingSlice';
import CheckBox from '../commons/CheckBox';

const SettingsAndCode = () => {
  const modalID = useAppSelector((state) => state.modalCreate.activeModal);
  const appearance = useAppSelector((state) => state.appearance);
  const { editedText } = useAppSelector((state) => state.modalCreate);
  const { targeting } = useAppSelector((state) => state.targeting);
  const codeRef = createRef();
  const dispatch = useDispatch();
  const handleCopy = () => {
    const { innerText } = (document.getElementById('code') as HTMLElement);
    navigator.clipboard.writeText(innerText).finally(() => {});
  };

  const code = `
    <script type="text/javascript" src="http://localhost:3000/Modal${modalID}/modal${modalID}.js"></script>
    <script>window.userData = ({
        size:"${appearance.size}",
        pos:${appearance.position},
        color:{
          background:"${appearance.style.backgroundColor}",
          theme:"${Object.values(appearance.style)[1]}",
          other:"${Object.values(appearance.style)[2]}",
          border:"${Object.values(appearance.style)[3]}",
          text:"${Object.values(appearance.style)[4]}"
        },
        img:"${appearance.imgUrl}",
        content:[${(Object.values(editedText).map((c) => `"${c}"`))}],
        target:[${(Object.values(targeting.visitorDevice))}],
        seconds:${targeting.seconds.value},
        scroll:${targeting.scroll.value},
        source:"${targeting.source.value}",
        langs:[${targeting.selectedLanguages.map((c) => `"${c}"`)}],
        exit:${targeting.exitIntent},
        hook:"${targeting.webhook}",
        sendForm:"${targeting.sendForm}",
        sendClick:"${targeting.sendClick}"
	})
</script>`;
  return (
    <div className="mt-24">
      <div className="flex items-center gap-4">
        <img src="/stepFive.svg" alt="" />
        <p className="font-[Poppins] font-bold text-xl tracking-tight whitespace-pre">Settings and Code</p>
      </div>
      <div className="flex pr-5">
        <div className="">
          <p className="mt-7 text-xl font-[Poppins] font-semibold">Webhook to Send data</p>
          <p className="mt-3 font-[Poppins]">Enter your Webhook URL</p>
          <span className="mt-3 font-[Poppins]">
            You can  create a simple one with
            <span className="font-semibold"> make.com</span>
          </span>
          <EditInput isActive edit={(value) => dispatch(setWebHook(value))} />
          <div className="mt-3">
            <div className="flex items-center gap-3">
              <CheckBox tickState={targeting.sendForm} check={() => dispatch(setSendForm())} />
              <p className="font-[Poppins]">Send form submissions</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <CheckBox tickState={targeting.sendClick} check={() => dispatch(setSendClick())} />
              <p className="font-[Poppins]">Send click data</p>
            </div>
          </div>
          <div className="w-full min-h-[260px] bg-[#333333] rounded-lg mt-7 relative p-5 text-sm text-white pb-12">
            <p id="code">
              {code}
            </p>
            <button
              type="button"
              onClick={handleCopy}
              className="base-color-bg text-white text-md font-[Poppins] px-3 py-1 rounded-full absolute bottom-3 right-3 base-color-shadow"
            >
              Copy the code
            </button>
          </div>
          <div className="flex gap-2 mt-3">
            <img src="/infoMark.svg" alt="infoMark" width="16" height="16" className="mb-10" />
            <p className="font-[Poppins] text-sm">Copy and paste the embed code above just before the closing &lt;/body&gt; tag of your website template file.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsAndCode;
