import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { KeyValueItem } from 'src/services/filterService/api';
import { theme } from 'src/theme';
import { App } from '../../../app/App/App';
import { IconButtonPanel, IconButtonPanelProps } from './IconButtonPanel';
import { FlexContainer } from 'src/components/Layout/FlexContainer';

export default {
  title: 'Editors/IconButtonPanel',
  component: IconButtonPanel,
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
} as ComponentMeta<typeof IconButtonPanel>;

const Template: ComponentStory<typeof IconButtonPanel> = args => <IconButtonPanel {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  hasEditButton: true,
  hasCopyButton: true,
  hasDeleteButton: true,
} as IconButtonPanelProps;

