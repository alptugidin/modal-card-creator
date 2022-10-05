import React from 'react';
import { Provider } from 'react-redux';
import { userEvent } from '@storybook/testing-library';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';
import { fireEvent } from '@testing-library/react';
import Appearance from '../../../components/Appearance/index';
import store from '../../../redux/store';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should be equal, SIZE selected by user and their equivalent in redux', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <Appearance />
        </Provider>,
      );
  });

  const sizes = ['Small', 'Medium', 'Large'];
  sizes.forEach((size) => {
    const button = container.querySelector(`#${size}`);
    userEvent.click(button);
    const state = store.getState();
    expect(state.appearance.sizeText).toEqual(size);
  });
});

it('should be equal, POSITION selected by user and their equivalent in redux ', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <Appearance />
        </Provider>,
      );
  });

  const positions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  positions.forEach((position) => {
    const button = container.querySelector(`#pos${position}`);
    userEvent.click(button);
    const state = store.getState();
    expect(state.appearance.position).toEqual(position);
  });
});

it('should be equal, COLOR selected by user and their equivalent in redux', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <Appearance />
        </Provider>,
      );
  });

  const inputCount = 5;
  for (let i = 0; i < inputCount; i + 1) {
    const colorInput = container.querySelector(`#input${i}`);
    fireEvent.input(colorInput, { target: { value: '#DADADA' } });
    const state = store.getState();
    expect(state.appearance.style[Object.keys(state.appearance.style)[i]]).toEqual('#dadada');
  }
});
