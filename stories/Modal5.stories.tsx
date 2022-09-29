// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal5 from '../components/ModalCardGenerator/Modals/Modal5';
import store from '../redux/store';

export default {
  title: 'Modal5',
  component: Modal5,
  decorators: [
    (Story) => (<Provider store={store}><Story /></Provider>),
  ],
  argTypes: {
    color: {
      options: ['#000', '#777777', '#F37C34', '#7D4AEA'],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Modal5>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal5> = (args:any) => <Modal5 {...args} />;

export const Base = Template.bind({});
