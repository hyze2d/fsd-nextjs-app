import type { FC } from 'react';
import styles from './header.module.scss';

const Header: FC = () => (
  <header className={styles.container}>
    <section>1</section>

    <section>2</section>

    <section>3</section>
  </header>
);

export { Header };
