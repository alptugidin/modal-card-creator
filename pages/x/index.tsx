import React from 'react';
import ReactDomServer from 'react-dom/server';
import { Provider } from 'react-redux';
import Modal1 from '../../components/ModalCardGenerator/Modals/Modal1';
import store from '../../redux/store';

const render = () => {
  const rawHtml = ReactDomServer.renderToStaticMarkup(
    <Provider store={store}>
      <Modal1 inStory={false} />
    </Provider>,
  );
  console.log(rawHtml);
};

const X = () => (
  <div className="bg-red-400 h-screen">
    <button type="button" onClick={render} className="px-3 py-1 bg-black text-white rounded-full">Render</button>
    +
    <Modal1 inStory={false} />
  </div>
);

export default X;
