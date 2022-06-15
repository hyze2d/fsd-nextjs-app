import useTranslation from 'next-translate/useTranslation';
import { $$album, AlbumCard } from '@entities/album';
import { createView } from '@shared/lib/view';
import styles from './home.module.scss';

const Home = createView()
  .props({
    albums: $$album.featuredAlbums
  })

  .view(({ albums }) => {
    const { t } = useTranslation();

    return (
      <div>
        <h1 className={styles.title}>
          {t('siteTitle')} / {t('home:title')}
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

export { Home };
