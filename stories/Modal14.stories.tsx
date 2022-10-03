// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal14 from '../components/ModalCardGenerator/Modals/Modal14';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal14/index.module.scss';

export default {
  title: 'Modal14',
  component: Modal14,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal14>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal14> = (args:any) => <Modal14 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
