import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../../../app/App/App';
import { CheckBox, CheckBoxProps } from './CheckBox';

export default {
  title: 'Editors/CheckBox',
  component: CheckBox,
  decorators: [
    Story => (
      <App>
        <Story />
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = args => <CheckBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'any item',
} as CheckBoxProps;

export const Checked = Template.bind({});
Checked.args = {
  placeholder: 'any item',
  checked: true,
} as CheckBoxProps;

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'any item',
  checked: true,
  disabled: true,
} as CheckBoxProps;
