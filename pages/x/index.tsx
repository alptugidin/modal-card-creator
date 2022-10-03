import React from 'react';
import ReactDomServer from 'react-dom/server';
import { Provider } from 'react-redux';
import Modal1 from '../../components/ModalCardGenerator/Modals/Modal1';
import store from '../../redux/store';

const X = () => {
  const render = () => {
    const rawHtml = ReactDomServer.renderToString(
      <Provider store={store}>
        <Modal1 inStory={false} />
      </Provider>,
    );
    console.log(rawHtml);
  };
  const raw = '<div class="Modal1_body__zt6uP" style="--bgColor:#ffffff;--svgColor:#7D4AEA;--textColor:#000000;--borderColor:#DDDDDD;--themeColor:#7D4AEA"><button type="button" class="Modal1_cancel__XIL9t"><img src="/cancel.svg" alt="cancel"/></button><div class="Modal1_svgDiv__2yXVA"><svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z" fill="#7D4AEA"></path><path d="M50 46.18L51.8 53.94L45 49.84L38.2 53.94L40 46.2L34 41.02L41.92 40.34L45 33.04L48.08 40.32L56 41L50 46.18ZM45 27.38L59 33.6V43C59 52.04 53.04 60.38 45 62.86C36.96 60.38 31 52.04 31 43V33.6L45 27.38ZM45 23L27 31V43C27 54.1 34.68 64.48 45 67C55.32 64.48 63 54.1 63 43V31L45 23Z" fill="white"></path></svg></div><div class="Modal1_textDiv__N3lxp"><p>Security Code</p><p>This code expires in 24 hours</p></div><div class="Modal1_inputDiv__F9qIc"><input type="text" placeholder="Code"/></div><div class="Modal1_btnDiv__vlUe4"><button type="button">Cancel</button><button type="button">Continue</button></div></div>';
  return (
    <div className="p-10">
      <button type="button" onClick={render} className="px-3 py-1 bg-black text-white rounded-full">Render</button>
    </div>
  );
};

export default X;
