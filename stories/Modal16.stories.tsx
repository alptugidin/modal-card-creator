// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal16 from '../components/ModalCardGenerator/Modals/Modal16';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal16/index.module.scss';

export default {
  title: 'Modal16',
  component: Modal16,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal16>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal16> = (args:any) => <Modal16 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
