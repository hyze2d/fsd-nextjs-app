import type { Meta, Story } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import type { ButtonProps } from './button.props';
import { Button } from './button.component';

export default {
  component: Button,
  title: 'UI/Atoms/Button'
} as Meta<ButtonProps>;

const Default: Story<ButtonProps> = args => <Button {...args} />;

Default.args = {
  children: 'Button'
};

Default.parameters = {
  badges: [BADGE.EXPERIMENTAL, BADGE.NEEDS_REVISION],
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
  }
};

export const Hover = () => <Button>Label</Button>;

Hover.parameters = {
  badges: [BADGE.EXPERIMENTAL, BADGE.NEEDS_REVISION],
  pseudo: {
    hover: true
  }
};

export { Default };
