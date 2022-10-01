// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal35 from '../components/ModalCardGenerator/Modals/Modal35';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal35/index.module.scss';

export default {
  title: 'Modal35',
  component: Modal35,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal35>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal35> = (args:any) => <Modal35 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
