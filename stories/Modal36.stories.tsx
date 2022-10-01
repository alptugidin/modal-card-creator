// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal36 from '../components/ModalCardGenerator/Modals/Modal36';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal36/index.module.scss';

export default {
  title: 'Modal36',
  component: Modal36,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal36>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal36> = (args:any) => <Modal36 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
