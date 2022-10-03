// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal23 from '../components/ModalCardGenerator/Modals/Modal23';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal23/index.module.scss';

export default {
  title: 'Modal23',
  component: Modal23,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal23>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal23> = (args:any) => <Modal23 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
