import React, { useEffect } from 'react';
import styles from './Header.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (e) => {
    e.preventDefault();

    if (location.pathname === '/') {
      const section = document.getElementById('kategori');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      sessionStorage.setItem('scrollToKategori', '1');
      navigate('/');
    }
  };

  useEffect(() => {
    const scrollToKategori = sessionStorage.getItem('scrollToKategori');
    if (scrollToKategori === '1') {
      const section = document.getElementById('kategori');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 300); // delay to wait until DOM is ready
      }
      sessionStorage.removeItem('scrollToKategori');
    }
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="TanyaBerita Logo" className={styles.logo} />
      <div className={styles.searchWrapper}>
        <input type="text" placeholder="Cari Berita" className={styles.searchInput} />
        <img src="/icons/search.png" alt="Search" className={styles.searchIcon} />
      </div>
      <nav className={styles.nav}>
        <a href="#kategori" className={styles.navItem} onClick={handleCategoryClick}>
          Category
        </a>
        <a href="/" className={`${styles.navItem} ${styles.active}`}>
          Home
        </a>
      </nav>
    </header>
  );
};

export default Header;
