import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from 'src/theme';
import { App } from '../../../app/App/App';
import { TextArea, TextAreaProps } from './TextArea';

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
  decorators: [
    Story => (
      <App>
        <Story />
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => <TextArea {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
  mode: 'normal',
  width: '300px',
  value: 'any text value',
} as TextAreaProps;

export const NormalDisabled = Template.bind({});
NormalDisabled.args = {
  mode: 'normal',
  width: theme.editorSizes.base300,
  value: 'any text value',
  disabled: true,
} as TextAreaProps;

export const Compact = Template.bind({});
Compact.args = {
  mode: 'compact',
  width: theme.editorSizes.base300,
  value: 'any text value',
} as TextAreaProps;

export const CompactDisabled = Template.bind({});
CompactDisabled.args = {
  mode: 'compact',
  width: theme.editorSizes.base300,
  value: 'any text value',
  disabled: true,
} as TextAreaProps;

export const WithoutBorders = Template.bind({});
WithoutBorders.args = {
  mode: 'without-borders',
  width: theme.editorSizes.base300,
  value: 'any text value',
} as TextAreaProps;

export const WithoutBordersDisabled = Template.bind({});
WithoutBordersDisabled.args = {
  mode: 'without-borders',
  width: theme.editorSizes.base300,
  value: 'any text value',
  disabled: true,
} as TextAreaProps;