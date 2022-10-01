// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Modal27 from '../components/ModalCardGenerator/Modals/Modal27';
import store from '../redux/store';
import '../components/ModalCardGenerator/Modals/Modal27/index.module.scss';

export default {
  title: 'Modal27',
  component: Modal27,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Modal27>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal27> = (args:any) => <Modal27 {...args} />;

Template.parameters = {};

export const Base = Template.bind({});
