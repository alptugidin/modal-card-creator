// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal3 from '../components/ModalCardGenerator/Modals/Modal3';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal3/index.module.scss';

export default {
  title: 'Modal3',
  component: Modal3,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal3>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal3> = (args:any) => <Modal3 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
