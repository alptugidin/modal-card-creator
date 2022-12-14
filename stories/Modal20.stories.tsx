// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal20 from '../components/ModalCardGenerator/Modals/Modal20';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal20/index.module.scss';

export default {
  title: 'Modal20',
  component: Modal20,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal20>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal20> = (args:any) => <Modal20 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
