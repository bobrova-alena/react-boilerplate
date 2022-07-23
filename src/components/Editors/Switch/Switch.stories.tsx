import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../../../app/App/App';
import { Switch, SwitchProps } from './Switch';

export default {
  title: 'Editors/Switch',
  component: Switch,
  decorators: [
    Story => (
      <App>
        <Story />
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  checked: false,
} as SwitchProps;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
} as SwitchProps;

