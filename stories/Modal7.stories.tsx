// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal7 from '../components/ModalCardGenerator/Modals/Modal7';
import store from '../redux/store';

export default {
  title: 'Modal7',
  component: Modal7,
  decorators: [
    (Story) => (<Provider store={store}><Story /></Provider>),
  ],
  argTypes: {
    color: {
      options: ['#000', '#777777', '#F37C34', '#7D4AEA'],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Modal7>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal7> = (args:any) => <Modal7 {...args} />;

export const Base = Template.bind({});
