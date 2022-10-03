// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal11 from '../components/ModalCardGenerator/Modals/Modal11';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal11/index.module.scss';

export default {
  title: 'Modal11',
  component: Modal11,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal11>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal11> = (args:any) => <Modal11 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
