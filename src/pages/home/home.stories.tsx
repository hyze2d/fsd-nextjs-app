/* eslint-disable import/exports-last */
import type { Meta, Story } from '@storybook/react';

import { StorybookProvider } from '@lib/storybook';
import { $$album } from '@entities/album';

import { Home as HomePage } from './home.component';

import { albumsMock } from './home.mock';

export const Page: Story = () => <HomePage />;

Page.decorators = [
  Story => (
    <StorybookProvider
      fork={{ values: [[$$album.featuredAlbums, albumsMock]] }}
    >
      <Story />
    </StorybookProvider>
  )
];

const story: Meta = {
  title: 'Pages/Home',
  component: HomePage
};

export default story;
