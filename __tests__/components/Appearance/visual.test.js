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

it('should change scale of div when user change that', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <Home />
        </Provider>,
      );
  });

  const sizes = ['Small', 'Medium', 'Large'];
  const scales = [0.8, 1, 1.1];
  const activeModal = document.querySelector('#sticky').childNodes[0];
  sizes.forEach((size, i) => {
    const button = container.querySelector(`#${size}`);
    userEvent.click(button);
    expect(activeModal.style).toHaveProperty('transform', `scale(${scales[i]})`);
  });
});

it('should change colors on modal, when user change that', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <Home />
        </Provider>,
      );
  });

  // const inputCount = 5;
  // const testColor = '#dadada';
  // const properties = ['--bgColor', '--svgColor', '--textColor', '--borderColor', '--themeColor'];
  // const activeModal = document.querySelector('#sticky').childNodes[0];
  // for (let i = 0; i < inputCount; i + 1) {
  //   const colorInput = container.querySelector(`#input${i}`);
  //   fireEvent.input(colorInput, { target: { value: '#ffffff' } });
  //   expect(activeModal.style).toHaveProperty(Object.values(properties[i]).join(''), '#ffffff');
  // }
});
