import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

type StaticProps = {
  album: {
    id: string;
    name: string;
    description: string;
  };
};

const getStaticPaths: GetStaticPaths = () => ({
  paths: [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
    { params: { id: '4' } }
  ],

  fallback: 'blocking'
});

const getStaticProps: GetStaticProps<StaticProps> = ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: {
      album: {
        id,
        name: `KEK${id}`,
        description: `dsadasdas ${id}`
      }
    }
  };
};

const Album: NextPage<StaticProps> = ({ album }) => (
  <div>
    <h1>
      {album.id} / {album.name}
    </h1>

    <p>{album.description}</p>
  </div>
);

export { Album, getStaticPaths, getStaticProps };
