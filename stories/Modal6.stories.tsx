// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal6 from '../components/ModalCardGenerator/Modals/Modal6';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal6/index.module.scss';

export default {
  title: 'Modal6',
  component: Modal6,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal6>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal6> = (args:any) => <Modal6 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
