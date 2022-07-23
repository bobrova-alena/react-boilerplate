import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { KeyValueItem } from 'src/services/filterService/api';
import { theme } from 'src/theme';
import { App } from '../../../app/App/App';
import { List, ListProps } from './List';

export default {
  title: 'Editors/List',
  component: List,
  decorators: [
    Story => (
      <App>
        <Story />
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = args => <List {...args} />;

const items: Array<KeyValueItem> = [
  { key: 'item 1' },
  { key: 'item 2' },
  { key: 'item 3' },
  { key: 'item 4' },
  { key: 'item 5' },
];

export const Normal = Template.bind({});
Normal.args = {
  items,
  width: theme.editorSizes.base300,
} as ListProps;

export const WithSelection = Template.bind({});
WithSelection.args = {
  items,
  width: theme.editorSizes.base300,
  selectedKey: 'item 2',
} as ListProps;

export const CompactWithFilteration = Template.bind({});
CompactWithFilteration.args = {
  items,
  width: theme.editorSizes.base300,
  selectedKey: 'item 2',
  filtrationAllowed: true,
  compact: true,
} as ListProps;

export const ClearAllowed = Template.bind({});
ClearAllowed.args = {
  items,
  width: theme.editorSizes.base300,
  selectedKey: 'item 2',
  clearAllowed: true,
} as ListProps;

