import { albumPage } from '@routes/album';
import { createGSSP } from '@shared/lib/next/gssp';

const getServerSideProps = createGSSP(albumPage.enter);

export { Album as default } from '@routes/album';
export { getServerSideProps };
