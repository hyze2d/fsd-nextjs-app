/* eslint-disable import/exports-last */
import type { Meta, Story } from '@storybook/react';
import { MainPage } from '@widgets/main-page';
import { $$album } from '@entities/album';
import { StorybookProvider } from '@shared/lib/storybook';

import { Albums as AlbumsPage } from './albums.component';

import { albumsMock } from './albums.mock';

export const Page: Story = () => <AlbumsPage />;

Page.decorators = [
  Story => (
    <StorybookProvider fork={{ values: [[$$album.albums, albumsMock]] }}>
      <MainPage>
        <Story />
      </MainPage>
    </StorybookProvider>
  )
];

const story: Meta = {
  title: 'Pages/Albums',
  component: AlbumsPage
};

export default story;
