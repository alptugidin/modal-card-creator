// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal34 from '../components/ModalCardGenerator/Modals/Modal34';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal34/index.module.scss';

export default {
  title: 'Modal34',
  component: Modal34,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal34>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal34> = (args:any) => <Modal34 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
