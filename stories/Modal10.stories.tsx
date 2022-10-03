// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal10 from '../components/ModalCardGenerator/Modals/Modal10';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal10/index.module.scss';

export default {
  title: 'Modal10',
  component: Modal10,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal10>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal10> = (args:any) => <Modal10 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
