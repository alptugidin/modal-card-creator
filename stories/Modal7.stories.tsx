// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal7 from '../components/ModalCardGenerator/Modals/Modal7';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal7/index.module.scss';

export default {
  title: 'Modal7',
  component: Modal7,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal7>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal7> = (args:any) => <Modal7 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
