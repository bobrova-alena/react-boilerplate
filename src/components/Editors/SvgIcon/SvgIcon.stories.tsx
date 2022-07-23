import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../../../app/App/App';
import { SvgIcon, SvgIconProps } from './SvgIcon';

export default {
  title: 'Editors/SvgIcon',
  component: SvgIcon,
  decorators: [
    Story => (
      <App>
        <Story />
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof SvgIcon>;

const Template: ComponentStory<typeof SvgIcon> = args => <SvgIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'cross-rounded',
  variant: 'primary',
  size: '12px',
} as SvgIconProps;

export const Delete = Template.bind({});
Delete.args = {
  name: 'delete',
  variant: 'danger',
  size: '12px',
} as SvgIconProps;
