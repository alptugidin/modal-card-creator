// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal8 from '../components/ModalCardGenerator/Modals/Modal8';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal8/index.module.scss';

export default {
  title: 'Modal8',
  component: Modal8,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal8>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal8> = (args:any) => <Modal8 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
