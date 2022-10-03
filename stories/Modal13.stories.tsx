// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal13 from '../components/ModalCardGenerator/Modals/Modal13';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal13/index.module.scss';

export default {
  title: 'Modal13',
  component: Modal13,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal13>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal13> = (args:any) => <Modal13 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
