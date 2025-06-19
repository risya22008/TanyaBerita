import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <img src={logo} alt="TanyaBerita Logo" className={styles.logo} />
      <div className={styles.searchWrapper}>
        <input type="text" placeholder="Cari Berita" className={styles.searchInput} />
      </div>
      <nav className={styles.nav}>
        <a href="#category">Category</a>
        <a href="#home">Home</a>
      </nav>
    </header>
  );
};

export default Header;