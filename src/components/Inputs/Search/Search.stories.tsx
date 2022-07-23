import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from 'src/theme';
import { App } from '../../../app/App/App';
import { Search, SearchProps } from './Search';

export default {
  title: 'Inputs/Search',
  component: Search,
  decorators: [
    Story => (
      <App>
        <Story />
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = args => <Search {...args} />;

export const Large = Template.bind({});
Large.args = {
  compact: false,
  width: theme.editorSizes.base300,
} as SearchProps;

export const LargeWithFilter = Template.bind({});
LargeWithFilter.args = {
  compact: false,
  filter: 'filter',
  width: theme.editorSizes.base300,
} as SearchProps;

export const Compact = Template.bind({});
Compact.args = {
  compact: true,
  width: theme.editorSizes.base300,
} as SearchProps;

export const CompactWithFilter = Template.bind({});
CompactWithFilter.args = {
  compact: true,
  filter: 'filter',
  width: theme.editorSizes.base300,
} as SearchProps;
