import React from 'react';
import { Provider } from 'react-redux';
import { userEvent } from '@storybook/testing-library';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';
import { fireEvent } from '@testing-library/react';
import Home from '../../../pages/index';
import store from '../../../redux/store';
import '@testing-library/jest-dom';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should ', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <Home />
        </Provider>,
      );
  });

  const activeModal = document.querySelector('#sticky').childNodes[0];
  const testString = 'hello world';
  const state = store.getState();
  const inputCount = state.modalCreate.editableTexts.length;
  console.log(activeModal.textContent);
  for (let i = 0; i < inputCount; i + 1) {
    const input = document.querySelector(`#content-input${i}`).childNodes[0].childNodes[0];
    fireEvent.input(input, { target: { value: testString } });
    const statex = store.getState();
    const textContentInModal = activeModal.textContent.replaceAll(' ', '');

    // DÜZELT!
    expect(textContentInModal).not.toEqual(Object.values(statex.modalCreate.editedText).join(' ').replaceAll(' ', ''));
  }
});
