// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal2 from '../components/ModalCardGenerator/Modals/Modal2';
import '../components/ModalCardGenerator/Modals/Modal2/index.module.scss';

export default {
  title: 'Modal2',
  component: Modal2,
  argTypes: {
    color: {
      options: ['black', 'darkgrey', 'orange', 'default'],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Modal2>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal2> = (args:any) => <Modal2 {...args} />;

export const Sm = Template.bind({});
Sm.args = { size: 'sm' };
export const Md = Template.bind({});
Md.args = { size: 'md' };
export const Lg = Template.bind({});
Lg.args = { size: 'lg' };
