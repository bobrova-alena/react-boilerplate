import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../../../app/App/App';
import { NumberInput, NumberInputProps } from './NumberInput';
import { theme } from 'src/theme';

export default {
  title: 'Inputs/NumberInput',
  component: NumberInput,
  decorators: [
    Story => (
      <App>
        <Story />
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = args => <NumberInput {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
  width: theme.editorSizes.base300,
  value: 1000,
} as NumberInputProps;

export const NormalDisabled = Template.bind({});
NormalDisabled.args = {
  width: theme.editorSizes.base300,
  value: 1000,
  disabled: true,
} as NumberInputProps;

export const Compact = Template.bind({});
Compact.args = {
  compact: true,
  width: theme.editorSizes.base300,
  value: 1000,
} as NumberInputProps;

export const CompactDisabled = Template.bind({});
CompactDisabled.args = {
  compact: true,
  width: theme.editorSizes.base300,
  value: 1000,
  disabled: true,
} as NumberInputProps;