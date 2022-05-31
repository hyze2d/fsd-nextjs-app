import type { GetStaticProps, NextPage } from 'next';

type Props = {
  albums: string[];
};

const Albums: NextPage<Props> = ({ albums }) => (
  <div>
    {albums.map(album => (
      <div key={album}>{album}</div>
    ))}
  </div>
);

const getStaticProps: GetStaticProps<Props> = async () => {
  const albums = ['dsada', 'dsad123123a', 'dsad123a', 'dsadasdasdad'];

  return {
    props: {
      albums
    }
  };
};

export { Albums, getStaticProps };
