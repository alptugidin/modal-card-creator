// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal15 from '../components/ModalCardGenerator/Modals/Modal15';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal15/index.module.scss';

export default {
  title: 'Modal15',
  component: Modal15,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal15>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal15> = (args:any) => <Modal15 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
