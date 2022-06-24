/* eslint-disable import/exports-last */
import type { Meta, Story } from '@storybook/react';

import { MainPage } from '@widgets/main-page';
import { $$album } from '@entities/album';
import { StorybookProvider } from '@shared/lib/storybook';

import { Home as HomePage } from './home.component';

import { albumsMock } from './home.mock';

export const Page: Story = () => <HomePage />;

Page.decorators = [
  Story => (
    <StorybookProvider
      fork={{ values: [[$$album.featuredAlbums, albumsMock]] }}
    >
      <MainPage>
        <Story />
      </MainPage>
    </StorybookProvider>
  )
];

const story: Meta = {
  title: 'Pages/Home',
  component: HomePage
};

export default story;
