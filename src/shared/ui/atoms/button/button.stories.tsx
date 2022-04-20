import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { Meta, Story } from '@storybook/react';
import { Button } from './button.component';
import type { ButtonProps } from './button.props';

// Primary

const Primary: Story<ButtonProps> = args => <Button {...args} />;

Primary.args = {
  children: 'Primary',
  variant: 'primary'
};

Primary.parameters = {
  badges: [BADGE.EXPERIMENTAL, BADGE.NEEDS_REVISION],

  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample'
  }
};

// Secondary

const Secondary: Story<ButtonProps> = args => <Button {...args} />;

Secondary.args = {
  children: 'Secondary',
  variant: 'secondary'
};

Secondary.parameters = {
  badges: [BADGE.EXPERIMENTAL, BADGE.NEEDS_REVISION]
};

export { Primary, Secondary };

export default {
  component: Button,
  title: 'Shared/Atoms/Button'
} as Meta<ButtonProps>;
