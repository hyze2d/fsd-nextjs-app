import type { Meta, Story } from '@storybook/react';
import { MainPage } from './main-page.component';

export const Base: Story = args => <MainPage {...args} />;

const story: Meta = {
  title: 'Widgets/MainPage',
  component: MainPage
};

export default story;
