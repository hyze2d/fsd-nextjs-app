import { createEffect, createStore } from 'effector';

type Album = {
  id: number | string;
  name: string;
};

const getAlbumFx = createEffect<Album['id'], Album>();

const $album = createStore<Album | null>(null);

getAlbumFx.use(id => ({
  id,
  name: 'Album Name'
}));

$album.on(getAlbumFx.doneData, (_, album) => album);

export { $album, getAlbumFx };
