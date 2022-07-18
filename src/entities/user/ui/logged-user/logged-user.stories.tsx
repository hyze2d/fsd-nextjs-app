/* eslint-disable import/exports-last */
import type { Meta, Story } from '@storybook/react';
import { $user } from '@entities/user/user.model';
import { StorybookProvider } from '@shared/lib/storybook';
import { LoggedUser } from './logged-user.component';
import { mockedUser } from './logged-user.mock';

export const Base: Story = () => <LoggedUser />;

const story: Meta = {
  title: 'Entities/User/LoggedUser',
  component: LoggedUser,
  decorators: [
    Story => (
      <StorybookProvider fork={{ values: [[$user, mockedUser]] }}>
        <Story />
      </StorybookProvider>
    )
  ]
};

export default story;
