import React, { useEffect } from 'react';
import styles from './Header.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/' || location.pathname === '/home') {
      const section = document.getElementById('kategori');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      sessionStorage.setItem('scrollToCategory', '1');
      navigate('/');
    }
  };

  useEffect(() => {
    const scrollToCategory = sessionStorage.getItem('scrollToCategory');
    if (scrollToCategory === '1') {
      const section = document.getElementById('kategori');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      sessionStorage.removeItem('scrollToCategory');
    }
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="TanyaBerita Logo" className={styles.logo} />
      
      <nav className={styles.nav}>
        <a href="#kategori" className={styles.navItem} onClick={handleCategoryClick}>
          Category
        </a>
        <a href="#home" className={`${styles.navItem} ${styles.active}`}>
          Home
        </a>
      </nav>
    </header>
  );
};

export default Header;
