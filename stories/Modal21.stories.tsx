// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal21 from '../components/ModalCardGenerator/Modals/Modal21';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal21/index.module.scss';

export default {
  title: 'Modal21',
  component: Modal21,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal21>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal21> = (args:any) => <Modal21 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
