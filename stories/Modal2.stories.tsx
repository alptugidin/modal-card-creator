// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal2 from '../components/ModalCardGenerator/Modals/Modal2';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal2/index.module.scss';

export default {
  title: 'Modal2',
  component: Modal2,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal2>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal2> = (args:any) => <Modal2 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
