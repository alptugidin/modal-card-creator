// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal4 from '../components/ModalCardGenerator/Modals/Modal4';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal4/index.module.scss';

export default {
  title: 'Modal4',
  component: Modal4,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal4>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal4> = (args:any) => <Modal4 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
