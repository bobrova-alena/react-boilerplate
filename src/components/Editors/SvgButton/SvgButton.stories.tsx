import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../../../app/App/App';
import { FlexContainer } from '../../Layout/FlexContainer';
import { SvgButton, SvgButtonProps } from './SvgButton';

export default {
  title: 'Editors/SvgButton',
  component: SvgButton,
  decorators: [
    Story => (
      <App>
        <FlexContainer padding={'50px 100px'}>
          <Story />
        </FlexContainer>
      </App>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof SvgButton>;

const Template: ComponentStory<typeof SvgButton> = args => <SvgButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'cross-rounded',
  variant: 'primary',
  size: '12px',
} as SvgButtonProps;

export const Delete = Template.bind({});
Delete.args = {
  name: 'delete',
  variant: 'danger',
  size: '12px',
} as SvgButtonProps;

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  name: 'cross-rounded',
  variant: 'primary',
  size: '12px',
  tooltip: 'narrow tooltip',
} as SvgButtonProps;

export const WithWideTooltip = Template.bind({});
WithWideTooltip.args = {
  name: 'cross-rounded',
  variant: 'primary',
  size: '12px',
  tooltip: 'wide tooltip example',
  wide: true,
} as SvgButtonProps;
