import {
  $albums,
  $featuredAlbums,
  getAlbumsFx,
  getFeaturedAlbumsFx
} from './album.model';

const $$album = {
  getAlbumsFx,
  getFeaturedAlbumsFx,

  albums: $albums,
  featuredAlbums: $featuredAlbums
};

export { $$album };
export { AlbumCard } from './ui';
