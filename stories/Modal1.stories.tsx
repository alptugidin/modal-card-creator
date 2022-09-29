// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal1 from '../components/ModalCardGenerator/Modals/Modal1';
import '../components/ModalCardGenerator/Modals/Modal1/index.module.scss';

export default {
  title: 'Modal1',
  component: Modal1,
  argTypes: {
    color: {
      options: ['black', 'darkgrey', 'orange', 'default'],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Modal1>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal1> = (args:any) => <Modal1 {...args} />;

export const Sm = Template.bind({});
Sm.args = { size: 'sm' };
export const Md = Template.bind({});
Md.args = { size: 'md' };
export const Lg = Template.bind({});
Lg.args = { size: 'lg' };
