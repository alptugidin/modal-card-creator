// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal26 from '../components/ModalCardGenerator/Modals/Modal26';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal26/index.module.scss';

export default {
  title: 'Modal26',
  component: Modal26,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal26>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal26> = (args:any) => <Modal26 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
