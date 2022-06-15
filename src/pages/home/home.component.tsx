import { useStore } from 'effector-react';
import { $$album } from '@entities/album';

// const Home = createView()
//   .props({
//     albums: $$album.featuredAlbums
//   })

//   .view(({ albums }) => {
//     const { t } = useTranslation();

//     return (
//       <div>
//         <h1 className={styles.title}>
//           {t('siteTitle')} / {t('home.title')}
//         </h1>

//         <ul className={styles.albums}>
//           {albums.map(album => (
//             <li key={album.id}>
//               <article className={styles.album}>
//                 <h2 className={styles.albumTitle}>{album.title}</h2>

//                 <img
//                   className={styles.albumThumbnail}
//                   src={album.thumbnail}
//                   alt='album thumbnail'
//                   width={200}
//                   height={200}
//                 />

//                 <p className={styles.albumDescription}>{album.description}</p>
//               </article>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   });

const Home = () => {
  const albums = useStore($$album.featuredAlbums);

  return <div>{albums.length}</div>;
};

export { Home };
