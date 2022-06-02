import type { FC, PropsWithChildren } from 'react';
import { Footer } from './footer';
import { Header } from './header';
import styles from './layout.module.scss';

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <main className={styles.layout}>
    <Header />

    <div className={styles.content}>{children}</div>

    <Footer />
  </main>
);

export { Layout };
