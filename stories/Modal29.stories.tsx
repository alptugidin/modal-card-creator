// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal29 from '../components/ModalCardGenerator/Modals/Modal29';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal29/index.module.scss';

export default {
  title: 'Modal29',
  component: Modal29,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal29>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal29> = (args:any) => <Modal29 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
