import React from 'react';
import { Provider } from 'react-redux';
import { userEvent } from '@storybook/testing-library';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';
import { fireEvent } from '@testing-library/react';
import TargetingRules from '../../../components/TargetingRules/index';
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

it('should work => visitorDeviceCheckBox ', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <TargetingRules />
        </Provider>,
      );
  });
  const visitorDeviceCheckBox = document.querySelector('#visitor-device').parentElement.childNodes[1];
  userEvent.click(visitorDeviceCheckBox);
  const state = store.getState();
  expect(state.targeting.targeting.visitorDevice.all).toEqual(true);
});

it('should work => secondsCheckBox ', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <TargetingRules />
        </Provider>,
      );
  });
  const secondsCheckBox = document.querySelector('#seconds').parentElement.childNodes[1];
  userEvent.click(secondsCheckBox);
  const state = store.getState();
  expect(state.targeting.targeting.seconds.isActive).toEqual(true);
});

it('should work => scrollCheckBox ', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <TargetingRules />
        </Provider>,
      );
  });
  const scrollCheckBox = document.querySelector('#scroll').parentElement.childNodes[1];
  userEvent.click(scrollCheckBox);
  const state = store.getState();
  expect(state.targeting.targeting.scroll.isActive).toEqual(true);
});

it('should work => trafficSoruceCheckBox ', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <TargetingRules />
        </Provider>,
      );
  });
  const trafficSoruceCheckBox = document.querySelector('#traffic-source').parentElement.childNodes[1];
  userEvent.click(trafficSoruceCheckBox);
  const state = store.getState();
  expect(state.targeting.targeting.source.isActive).toEqual(true);
});

it('should work => browserLanguageCheckBox ', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <TargetingRules />
        </Provider>,
      );
  });

  const browserLanguageCheckBox = document.querySelector('#browser-language').parentElement.childNodes[1];
  userEvent.click(browserLanguageCheckBox);
  const state = store.getState();
  expect(state.targeting.targeting.languages.isActive).toEqual(true);
});

it('should work => exitIntentCheckBox ', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <TargetingRules />
        </Provider>,
      );
  });

  const exitIntentCheckBox = document.querySelector('#exit-intent').parentElement.childNodes[1];
  userEvent.click(exitIntentCheckBox);
  const state = store.getState();
  expect(state.targeting.targeting.exitIntent).toEqual(true);
});

const testData = 100;

it('should work => seconds input ', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <TargetingRules />
        </Provider>,
      );
  });

  const secondsInput = document.querySelector('#seconds-input').childNodes[0].childNodes[0];
  fireEvent.input(secondsInput, { target: { value: testData } });
  const state = store.getState();
  expect(state.targeting.targeting.seconds.value).toEqual(testData);
});

it('should work => scrolls input ', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <TargetingRules />
        </Provider>,
      );
  });

  const scrollInput = document.querySelector('#scroll-input').childNodes[0].childNodes[0];
  fireEvent.input(scrollInput, { target: { value: testData } });
  const state = store.getState();
  expect(state.targeting.targeting.scroll.value).toEqual(testData);
});

it('should work => traffic source input ', async () => {
  await act(() => {
    ReactDOM.createRoot(container)
      .render(
        <Provider store={store}>
          <TargetingRules />
        </Provider>,
      );
  });

  const sourceInput = document.querySelector('#source-input').childNodes[0].childNodes[0];
  fireEvent.input(sourceInput, { target: { value: testData.toString() } });
  const state = store.getState();
  expect(state.targeting.targeting.source.value).toEqual(testData.toString());
});
