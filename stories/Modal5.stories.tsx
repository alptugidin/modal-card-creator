// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal5 from '../components/ModalCardGenerator/Modals/Modal5';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal5/index.module.scss';

export default {
  title: 'Modal5',
  component: Modal5,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal5>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal5> = (args:any) => <Modal5 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
