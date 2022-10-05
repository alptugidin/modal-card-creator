import React, { createRef, useRef, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import { useAppSelector } from '../../redux/store';
import EditInput from '../commons/EditInput';
import { setSendClick, setSendForm, setWebHook } from '../../features/targetingSlice';
import CheckBox from '../commons/CheckBox';

const SettingsAndCode = () => {
  const modalID = useAppSelector((state) => state.modalCreate.activeModal);
  const appearance = useAppSelector((state) => state.appearance);
  const { editedText } = useAppSelector((state) => state.modalCreate);
  const { targeting } = useAppSelector((state) => state.targeting);
  const [copiedEffect, setCopiedEffect] = useState(false);
  const generateCode = ():string => {
    const sizeConvert = ():string => {
      let output;
      if (appearance.size === '0.8') {
        output = 'Small';
      } else if (appearance.size === '1') {
        output = 'Medium';
      } else {
        output = 'Large';
      }
      return output;
    };
    return `
    window.userData = ({
        id:"${modalID}",
        size:"${sizeConvert()}",
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
        target:[${(Object.values(targeting.visitorDevice).slice(1, 3))}],
        seconds:${targeting.seconds.value},
        scroll:${targeting.scroll.value},
        source:"${targeting.source.value}",
        langs:[${targeting.selectedLanguages.map((c) => `"${c}"`)}],
        exit:${targeting.exitIntent},
        hook:"${targeting.webhook}",
        sendForm:"${targeting.sendForm}",
        sendClick:"${targeting.sendClick}"
	})`;
  };
  const dispatch = useDispatch();
  const handleCopy = () => {
    const { innerText } = (document.getElementById('code') as HTMLElement);
    navigator.clipboard.writeText(innerText).finally(() => {});
    setCopiedEffect(true);
    setTimeout(() => {
      setCopiedEffect(false);
    }, 800);
  };

  return (
    <div className="mt-24">
      <Head>
        <title>modal.cards</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
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
          <div className="w-full min-h-[260px] bg-[#333333] rounded-lg mt-7 relative p-5 text-sm text-white pb-12 relative">
            <div className={`absolute left-0 top-0 w-full h-full bg-purple-500 z-30 rounded-lg bg-opacity-20 ${copiedEffect ? 'block' : 'hidden'}`}>
              <p className="text-3xl bg-white text-purple-500 ml-auto mr-auto w-fit px-3 py-1 rounded-full mt-[25%] font-semibold ">Copied!</p>
            </div>
            <p id="code">
              <span>
                &lt;
                <span className="text-yellow-500">
                  script type=
                  <span className="text-white">"</span>
                  <span className="text-cyan-300">text/javascript</span>
                  <span className="text-white">"</span>
                </span>
                <span className="text-yellow-500">
                  {' '}
                  src=
                  <span className="text-white">"</span>
                  <span className="text-cyan-300">
                    https://modal-card-creator-eight.vercel.app/Modal
                    {modalID}
                    /modal
                    {modalID}
                    .js
                  </span>
                  <span className="text-white">"&gt;&lt;/</span>
                  <span className="text-yellow-500">script</span>
                </span>
                &gt;
              </span>
              <br />
              <span className="text-white">&lt;</span>
              <span className="text-yellow-500">script</span>
              <span className="text-white">&gt;</span>
              <span className="text-gray-300">{generateCode()}</span>
              <span className="text-white">&lt;/</span>
              <span className="text-yellow-500">script</span>
              <span className="text-white">&gt;</span>
            </p>
            <button
              type="button"
              onClick={handleCopy}
              className="bg-purple-500 text-white text-md font-[Poppins] px-3 py-1 rounded-full absolute bottom-3 right-3 drop-shadow-lg"
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
