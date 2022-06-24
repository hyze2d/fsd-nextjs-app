/* eslint-disable import/exports-last */
import type { Meta, Story } from '@storybook/react';

import type { AlbumProps } from './album-card.component';
import { AlbumCard } from './album-card.component';

export const Base: Story<AlbumProps> = args => <AlbumCard {...args} />;

Base.args = {
  album: {
    id: 1,
    title: 'Title',
    description: 'descriptions',
    thumbnail: 'https://picsum.photos/212'
  }
};

const story: Meta<AlbumProps> = {
  title: 'Entities/Album/AlbumCard',
  component: AlbumCard
};

export default story;
