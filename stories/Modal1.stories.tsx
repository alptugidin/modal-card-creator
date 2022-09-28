// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal1 from '../components/ModalCardGenerator/Modals/Modal1';
import '../components/ModalCardGenerator/Modals/Modal1/index.module.scss';

export default {
  title: 'Modal',
  component: Modal1,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'radio',
    },
    color: {
      options: ['black', 'darkgrey', 'orange', 'default'],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Modal1>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal1> = (args:any) => <Modal1 {...args} />;

export const Modal = Template.bind({});
