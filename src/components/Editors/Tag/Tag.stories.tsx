import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../../../app/App/App';
import { Tag, TagProps } from './Tag';

export default {
  title: 'Editors/Tag',
  component: Tag,
  decorators: [
    Story => (
      <App>
        <Story />
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tag: 'tag_value',
} as TagProps;

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  tag: 'tag_value',
  hasCloseButton: true,
} as TagProps;

