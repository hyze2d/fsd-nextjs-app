import { useStore } from 'effector-react/ssr';
import { $$album } from '@entities/album';

// const Home = createView()
//   .props({
//     albums: $$album.featuredAlbums
//   })

//   .view(({ albums }) => (
//     <div>
//       <h1>Home</h1>

//       <ul>
//         {albums.map(album => (
//           <li key={album.id}>
//             <article>
//               <header>
//                 <h2>{album.title}</h2>

//                 <Image src={album.thumbnail} alt='album thumbnail' />

//                 <p>{album.description}</p>
//               </header>
//             </article>
//           </li>
//         ))}
//       </ul>
//     </div>
//   ));

const Home = () => {
  const albums = useStore($$album.featuredAlbums);

  return (
    <div>
      <h1>Home</h1>

      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <article>
              <header>
                <h2>{album.title}</h2>

                <img
                  src={album.thumbnail}
                  alt='album thumbnail'
                  width={200}
                  height={200}
                />

                <p>{album.description}</p>
              </header>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Home };
