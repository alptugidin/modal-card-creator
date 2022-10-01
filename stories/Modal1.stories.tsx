// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal1 from '../components/ModalCardGenerator/Modals/Modal1';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal1/index.module.scss';

export default {
  title: 'Modal1',
  component: Modal1,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal1>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal1> = (args:any) => <Modal1 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
