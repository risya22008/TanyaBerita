import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="TanyaBerita Logo" className={styles.logo} />
      <div className={styles.searchWrapper}>
        <input type="text" placeholder="Cari Berita" className={styles.searchInput} />
        <img src="/icons/search.png" alt="Search" className={styles.searchIcon} />
      </div>
      <nav className={styles.nav}>
        <a href="#category" className={styles.navItem}>Category</a>
        <a href="#home" className={`${styles.navItem} ${styles.active}`}>Home</a>
      </nav>
    </header>
  );
};

export default Header;