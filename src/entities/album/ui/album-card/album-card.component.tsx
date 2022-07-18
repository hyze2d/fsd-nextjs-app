import type { Album } from '@entities/album/lib';
import styles from './album-card.module.scss';

type AlbumProps = {
  album: Album;
};

const AlbumCard = ({ album }: AlbumProps) => (
  <article className={styles.album}>
    <h2 className={styles.title}>{album.title}</h2>

    <div className={styles.thumbnailBox}>
      <img
        className={styles.thumbnail}
        src={album.thumbnail}
        alt='album thumbnail'
      />
    </div>

    <p className={styles.description}>{album.description}</p>
  </article>
);

export { AlbumCard };
export type { AlbumProps };
