// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal32 from '../components/ModalCardGenerator/Modals/Modal32';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal32/index.module.scss';

export default {
  title: 'Modal32',
  component: Modal32,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal32>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal32> = (args:any) => <Modal32 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
