import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../../../app/App/App';
import { NumberInput, NumberInputProps } from './NumberInput';

export default {
  title: 'Editors/NumberInput',
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
  width: '300px',
  value: 1000,
} as NumberInputProps;

export const NormalDisabled = Template.bind({});
NormalDisabled.args = {
  width: '300px',
  value: 1000,
  disabled: true,
} as NumberInputProps;

export const Compact = Template.bind({});
Compact.args = {
  compact: true,
  width: '300px',
  value: 1000,
} as NumberInputProps;

export const CompactDisabled = Template.bind({});
CompactDisabled.args = {
  compact: true,
  width: '300px',
  value: 1000,
  disabled: true,
} as NumberInputProps;