import type { Meta, Story } from '@storybook/react';

import { AppCrashed } from './app-crashed.component';

export const Base: Story = args => <AppCrashed {...args} />;

const story: Meta = {
  title: 'Widgets/AppCrashed',
  component: AppCrashed
};

export default story;
