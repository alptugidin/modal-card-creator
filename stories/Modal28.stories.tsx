// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal28 from '../components/ModalCardGenerator/Modals/Modal28';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal28/index.module.scss';

export default {
  title: 'Modal28',
  component: Modal28,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal28>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal28> = (args:any) => <Modal28 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
