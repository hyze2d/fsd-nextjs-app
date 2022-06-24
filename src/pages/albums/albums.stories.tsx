/* eslint-disable import/exports-last */
import type { Meta, Story } from '@storybook/react';

import { StorybookProvider } from '@lib/storybook';
import { $$album } from '@entities/album';

import { Albums as AlbumsPage } from './albums.component';

import { albumsMock } from './albums.mock';

export const Page: Story = () => <AlbumsPage />;

Page.decorators = [
  Story => (
    <StorybookProvider fork={{ values: [[$$album.albums, albumsMock]] }}>
      <Story />
    </StorybookProvider>
  )
];

const story: Meta = {
  title: 'Pages/Albums',
  component: AlbumsPage
};

export default story;
