// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal31 from '../components/ModalCardGenerator/Modals/Modal31';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal31/index.module.scss';

export default {
  title: 'Modal31',
  component: Modal31,
  decorators: [
    (Story) => (
        <Provider store={store}>
          <Story />
        </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal31>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal31> = (args:any) => <Modal31 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
