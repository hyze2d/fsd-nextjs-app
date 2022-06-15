import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { LoggedUser } from '@entities/user';
import { createView } from '@shared/lib/view';
import styles from './main-page.module.scss';

const MainPage = createView<PropsWithChildren<{}>>().view(({ children }) => (
  <div className={styles.mainPage}>
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Link href='/'>Home</Link>

          <Link href='/test'>Test</Link>
        </div>

        <LoggedUser />
      </div>
    </header>

    <main className={styles.main}>
      <div className={styles.container}>{children}</div>
    </main>

    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <ul>
            <li>
              <Link href='/'>home</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
));

export { MainPage };
