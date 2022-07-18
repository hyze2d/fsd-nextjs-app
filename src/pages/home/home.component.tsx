import useTranslation from 'next-translate/useTranslation';
import { $$album, AlbumCard } from '@entities/album';
import { createView } from '@shared/lib/view';
import { Icon } from '@shared/ui/icons';
import { TwitterIcon } from '@shared/ui/icons/twitter';
import styles from './home.module.scss';

const Home = createView()
  .units({
    albums: $$album.featuredAlbums
  })

  .view(({ albums }) => {
    const { t } = useTranslation();

    return (
      <div>
        <h1 className={styles.title}>
          {t('siteTitle')} / {t('home:title')}{' '}
          <Icon.ChevronDown width={30} color='red' />
        </h1>

        <ul className={styles.albums}>
          {albums.map(album => (
            <li key={album.id}>
              <AlbumCard album={album} /> <TwitterIcon />
            </li>
          ))}
        </ul>
      </div>
    );
  });

export { Home };
