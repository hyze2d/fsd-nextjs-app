import { createEffect, createStore } from 'effector';
import type { Album } from './lib';

const mock = [
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
    thumbnail: 'https://picsum.photos/202'
  },

  {
    id: 3,
    title: 'Some title3',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/204'
  },

  {
    id: 4,
    title: 'Some title4',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/206'
  },

  {
    id: 5,
    title: 'Some title5',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/208'
  },

  {
    id: 6,
    title: 'Some title6',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/210'
  },

  {
    id: 7,
    title: 'Some title7',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/212'
  }
].map(item => ({
  ...item,
  id: item.id + 8,
  title: `${item.title}ON ALBUMS PAGE`,
  thumbnail: item.thumbnail.replace('2', '3')
}));

const getAlbumsFx = createEffect<void, Album[]>();
const getFeaturedAlbumsFx = createEffect<void, Album[]>();

const $albums = createStore<Album[]>([]);
const $featuredAlbums = createStore<Album[]>([]);

$albums.on(getAlbumsFx.doneData, (_, albums) => albums);

$featuredAlbums.on(getFeaturedAlbumsFx.doneData, (_, albums) => albums);

getFeaturedAlbumsFx.use(() => mock);

getAlbumsFx.use(() =>
  mock.map(item => ({
    ...item,
    id: item.id + 8,
    title: `${item.title}ON ALBUMS PAGE`,
    thumbnail: item.thumbnail.replace('2', '3')
  }))
);

export { $featuredAlbums, $albums, getAlbumsFx, getFeaturedAlbumsFx };
