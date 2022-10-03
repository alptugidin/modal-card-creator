// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal19 from '../components/ModalCardGenerator/Modals/Modal19';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal19/index.module.scss';

export default {
  title: 'Modal19',
  component: Modal19,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal19>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal19> = (args:any) => <Modal19 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
