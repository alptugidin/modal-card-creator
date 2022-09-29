// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal3 from '../components/ModalCardGenerator/Modals/Modal3';
import '../components/ModalCardGenerator/Modals/Modal3/index.module.scss';

export default {
  title: 'Modal3',
  component: Modal3,
  argTypes: {
    color: {
      options: ['black', 'darkgrey', 'orange', 'default'],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Modal3>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal3> = (args:any) => <Modal3 {...args} />;

export const Sm = Template.bind({});
Sm.args = { size: 'sm' };
export const Md = Template.bind({});
Md.args = { size: 'md' };
export const Lg = Template.bind({});
Lg.args = { size: 'lg' };
