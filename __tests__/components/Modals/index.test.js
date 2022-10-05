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

  const pages = [1, 2, 3];

  for (let i = 0; i < pages; i + 1) {
    const button = document.querySelector(`page${i}`);
    const firstElementBeforeClick = document.querySelector('#template-div').childNodes[0];
    console.log(firstElementBeforeClick);
    userEvent.click(button);
    expect(firstElementBeforeClick).toBeNull();
  }
});
