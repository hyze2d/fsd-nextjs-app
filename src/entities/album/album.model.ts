import { createEffect, createStore } from 'effector';
import type { Album } from './lib';

const getFeaturedAlbumsFx = createEffect<void, Album[]>();

const $featuredAlbums = createStore<Album[]>([]);

$featuredAlbums.on(getFeaturedAlbumsFx.doneData, (_, albums) => albums);

getFeaturedAlbumsFx.use(() => [
  {
    id: 1,
    title: 'Some title',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/200'
  },
  {
    id: 2,
    title: 'Some titld2',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/200'
  },

  {
    id: 3,
    title: 'Some title3',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/200'
  },

  {
    id: 4,
    title: 'Some title4',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/200'
  },

  {
    id: 5,
    title: 'Some title5',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/200'
  },

  {
    id: 6,
    title: 'Some title6',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/200'
  },

  {
    id: 7,
    title: 'Some title7',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/200'
  }
]);

export { $featuredAlbums, getFeaturedAlbumsFx };
