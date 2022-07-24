import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { KeyValueItem } from 'src/services/filterService/api';
import { theme } from 'src/theme';
import { App } from '../../../app/App/App';
import { IconDropDown, IconDropDownProps } from './IconDropDown';

export default {
  title: 'DropDowns/IconDropDown',
  component: IconDropDown,
  decorators: [
    Story => (
      <App>
        <Story />
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof IconDropDown>;

const Template: ComponentStory<typeof IconDropDown> = args => <IconDropDown {...args} />;

const items: Array<KeyValueItem> = [
  { key: 'item 1' },
  { key: 'item 2' },
  { key: 'item 3' },
  { key: 'item 4' },
  { key: 'item 5' },
];

export const Normal = Template.bind({});
Normal.args = {
  icon: 'empty-filter',
  items,
  width: theme.editorSizes.base300,
} as IconDropDownProps;

export const WithSelection = Template.bind({});
WithSelection.args = {
  icon: 'filter',
  items,
  width: theme.editorSizes.base300,
  selectedKey: 'item 2',
} as IconDropDownProps;

export const CompactWithFilteration = Template.bind({});
CompactWithFilteration.args = {
  icon: 'filter',
  items,
  width: theme.editorSizes.base300,
  selectedKey: 'item 2',
  filtrationAllowed: true,
  compact: true,
} as IconDropDownProps;

export const ClearAllowed = Template.bind({});
ClearAllowed.args = {
  icon: 'filter',
  items,
  width: theme.editorSizes.base300,
  selectedKey: 'item 2',
  clearAllowed: true,
} as IconDropDownProps;

