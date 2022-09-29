// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal10 from '../components/ModalCardGenerator/Modals/Modal10';
import store from '../redux/store';

export default {
  title: 'Modal10',
  component: Modal10,
  decorators: [
    (Story) => (<Provider store={store}><Story /></Provider>),
  ],
  argTypes: {
    color: {
      options: ['#000', '#777777', '#F37C34', '#7D4AEA'],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Modal10>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal10> = (args:any) => <Modal10 {...args} />;

export const Base = Template.bind({});
