// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal30 from '../components/ModalCardGenerator/Modals/Modal30';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal30/index.module.scss';

export default {
  title: 'Modal30',
  component: Modal30,
  decorators: [
    (Story) => (
        <Provider store={store}>
          <Story />
        </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal30>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal30> = (args:any) => <Modal30 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
