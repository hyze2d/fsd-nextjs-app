import Link from 'next/link';
import { $album } from '@entities/album';
import { createView } from '@shared/lib/view';
import { albumPage } from './album.model';

const props = {
  album: $album
};

const Album = createView()
  .props(props)
  .view(({ album }) => (
    <div>
      <h1>Album / {album?.name}</h1>

      <div>Kek</div>

      <Link href='/profile'>To Profile</Link>
    </div>
  ));

export { Album, albumPage };
