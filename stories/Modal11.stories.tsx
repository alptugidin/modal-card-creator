// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal11 from '../components/ModalCardGenerator/Modals/Modal11';
import store from '../redux/store';

export default {
  title: 'Modal11',
  component: Modal11,
  decorators: [
    (Story) => (<Provider store={store}><Story /></Provider>),
  ],
  argTypes: {
    color: {
      options: ['#000', '#777777', '#F37C34', '#7D4AEA'],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Modal11>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal11> = (args:any) => <Modal11 {...args} />;

export const Base = Template.bind({});
