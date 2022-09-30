// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal24 from '../components/ModalCardGenerator/Modals/Modal24';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal24/index.module.scss';

export default {
  title: 'Modal24',
  component: Modal24,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal24>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal24> = (args:any) => <Modal24 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
