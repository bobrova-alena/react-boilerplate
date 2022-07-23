import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../../../app/App/App';
import { TagInput, TagInputProps } from './TagInput';

export default {
  title: 'Inputs/TagInput',
  component: TagInput,
  decorators: [
    Story => (
      <App>
        <Story />
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof TagInput>;

const Template: ComponentStory<typeof TagInput> = args => <TagInput {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  value: 'new_tag',
} as TagInputProps;

