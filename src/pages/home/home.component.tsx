import { $$album } from '@entities/album';
import { createView } from '@shared/lib/view';

import styles from './home.module.scss';

const Home = createView()
  .props({
    albums: $$album.featuredAlbums
  })

  .view(({ albums }) => (
    <div>
      <h1 className={styles.title}>Home</h1>

      <ul className={styles.albums}>
        {albums.map(album => (
          <li key={album.id}>
            <article className={styles.album}>
              <h2 className={styles.albumTitle}>{album.title}</h2>

              <img
                className={styles.albumThumbnail}
                src={album.thumbnail}
                alt='album thumbnail'
                width={200}
                height={200}
              />

              <p className={styles.albumDescription}>{album.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  ));

export { Home };
