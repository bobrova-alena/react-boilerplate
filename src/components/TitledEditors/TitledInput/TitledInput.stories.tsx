import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../../../app/App/App';
import { TitledInput, TitledInputProps } from './TitledInput';
import { theme } from 'src/theme';

export default {
  title: 'TitledEditors/TitledInput',
  component: TitledInput,
  decorators: [
    Story => (
      <App>
        <Story />
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof TitledInput>;

const Template: ComponentStory<typeof TitledInput> = args => <TitledInput {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
  text: 'Any title',
  width: theme.editorSizes.base300,
  value: 'text',
} as TitledInputProps;

export const Requered = Template.bind({});
Requered.args = {
  text: 'Any title',
  width: theme.editorSizes.base300,
  value: 'text',
  required: true,
} as TitledInputProps;

export const NormalDisabled = Template.bind({});
NormalDisabled.args = {
  text: 'Any title',
  width: theme.editorSizes.base300,
  value: 'text',
  disabled: true,
} as TitledInputProps;
