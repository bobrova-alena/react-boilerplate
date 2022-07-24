import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { KeyValueItem } from 'src/services/filterService/api';
import { FlexContainer } from 'src/components/Layout/FlexContainer';
import { App } from '../../../app/App/App';
import { Table, TableProps } from './Table';
import { TableCell, TableHeader, TableRow } from './api';

export default {
  title: 'Editors/Table',
  component: Table,
  decorators: [
    Story => (
      <App>
        <FlexContainer marginRight={'auto'}>
          <Story />
        </FlexContainer>
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => <Table {...args}/>;

const items: Array<KeyValueItem> = [
  { key: 'item 1' },
  { key: 'item 2' },
  { key: 'item 3' },
  { key: 'item 4' },
  { key: 'item 5' },
];

const headers = [
  {
    text: 'First column',
    filter: {
      items,
      selectedKey: 'item 2',
      onSelection: () => {
        alert('on selection');
      },
    },
  } as TableHeader,
  {
    text: 'Second column',
    info: 'any information'
  } as TableHeader,
  'Third column',
];
const columnWidth = ['140px', '140px', '140px'];
const rows =  new Array<TableRow>();
const cells1 = new Array<TableCell>();
cells1.push({
  value: 'item 1',
});
cells1.push({
  value: 1000,
});
cells1.push({
  value: new Date('2022-07-11'),
});
rows.push({
  cells: cells1,
  allowEdit: true,
  variant: 'primary',
});

const cells2 = new Array<TableCell>();
cells2.push({
  value: 'item 2',
});
cells2.push({
  value: 543,
});
cells2.push({
  value: new Date('2022-08-10'),
});
rows.push({
  cells: cells2,
  allowEdit: true,
  variant: 'gray-text',
});

const cells3 = new Array<TableCell>();
cells3.push({
  value: 'item 3',
});
cells3.push({
  value: 10,
});
cells3.push({
  value: new Date('2022-11-10'),
});
rows.push({
  cells: cells3,
  allowEdit: true,
  variant: 'primary',
});

const cells4 = new Array<TableCell>();
cells4.push({
  value: 'item 4',
});
cells4.push({
  value: 65444,
});
cells4.push({
  value: new Date('2022-11-10'),
});
rows.push({
  cells: cells4,
  allowEdit: true,
  variant: 'primary',
});

const cells5 = new Array<TableCell>();
cells5.push({
  value: 'item 5',
});
cells5.push({
  value: 10,
});
cells5.push({
  value: new Date('2022-11-10'),
});
rows.push({
  cells: cells5,
  allowEdit: true,
  variant: 'secondary-highlighted',
});

export const Medium = Template.bind({});
Medium.args = {
  rows,
  columnWidth,
  headers,
  style: 'medium',
} as TableProps;

export const Large = Template.bind({});
Large.args = {
  rows,
  columnWidth,
  headers,
  style: 'large',
} as TableProps;

export const LargeInEditMode = Template.bind({});
LargeInEditMode.args = {
  rows,
  columnWidth,
  headers,
  style: 'large',
  editMode: true,
} as TableProps;

export const Compact = Template.bind({});
Compact.args = {
  rows,
  columnWidth,
  headers,
  style: 'small',
} as TableProps;

export const CompactWithoutHeaders = Template.bind({});
CompactWithoutHeaders.args = {
  rows,
  columnWidth,
  style: 'small',
} as TableProps;
