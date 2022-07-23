import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../../../app/App/App';
import { Input, InputProps } from './Input';
import { theme } from 'src/theme';

export default {
  title: 'Inputs/Input',
  component: Input,
  decorators: [
    Story => (
      <App>
        <Story />
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
  mode: 'normal',
  width: '300px',
  value: 'text',
} as InputProps;

export const NormalDisabled = Template.bind({});
NormalDisabled.args = {
  mode: 'normal',
  width: theme.editorSizes.base300,
  value: 'text',
  disabled: true,
} as InputProps;

export const Compact = Template.bind({});
Compact.args = {
  mode: 'compact',
  width: theme.editorSizes.base300,
  value: 'text',
} as InputProps;

export const CompactDisabled = Template.bind({});
CompactDisabled.args = {
  mode: 'compact',
  width: theme.editorSizes.base300,
  value: 'text',
  disabled: true,
} as InputProps;

export const Large = Template.bind({});
Large.args = {
  mode: 'large',
  width: theme.editorSizes.base300,
  value: 'text',
} as InputProps;

export const LargeDisabled = Template.bind({});
LargeDisabled.args = {
  mode: 'large',
  width: theme.editorSizes.base300,
  value: 'text',
  disabled: true,
} as InputProps;


export const WithoutBorders = Template.bind({});
WithoutBorders.args = {
  mode: 'without-borders',
  width: theme.editorSizes.base300,
  value: 'text',
} as InputProps;

export const WithoutBordersDisabled = Template.bind({});
WithoutBordersDisabled.args = {
  mode: 'without-borders',
  width: theme.editorSizes.base300,
  value: 'text',
  disabled: true,
} as InputProps;