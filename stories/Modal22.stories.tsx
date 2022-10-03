// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal22 from '../components/ModalCardGenerator/Modals/Modal22';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal22/index.module.scss';

export default {
  title: 'Modal22',
  component: Modal22,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal22>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal22> = (args:any) => <Modal22 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
