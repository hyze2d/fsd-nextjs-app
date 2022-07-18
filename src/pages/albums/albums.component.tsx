import useTranslation from 'next-translate/useTranslation';
import { $$album, AlbumCard } from '@entities/album';
import { createView } from '@shared/lib/view';
import styles from './albums.module.scss';

const Albums = createView()
  .units({
    albums: $$album.albums
  })
  .view(({ albums }) => {
    const { t } = useTranslation();

    return (
      <div>
        <h1 className={styles.title} style={{}}>
          {t('siteTitle')} / {t('albums:title')}
        </h1>

        <ul className={styles.albums}>
          {albums.map(album => (
            <li key={album.id}>
              <AlbumCard album={album} />
            </li>
          ))}
        </ul>
      </div>
    );
  });

export { Albums };
