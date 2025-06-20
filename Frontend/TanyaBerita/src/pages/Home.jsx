import React from 'react';
import Header from "../components/Header";
import categories from "./categoriesData";
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className="app">
      <Header />

      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Selamat datang di TanyaBerita!</h1>
            <p>
              Temukan informasi terkini, ringkasan cerdas, dan jawaban atas rasa ingin tahu.
            </p>
            <button className={styles.ctaButton}>
              Baca Berita Sekarang
            </button>
          </div>
          <div className={styles.heroImage}>
            <img src="/Illustration.png" alt="Hero Illustration" />
          </div>
        </section>
      </div>

      {/* Category Section */}
      <section className={styles.categorySection}>
        <h2 className={styles.sectionTitle}>Category</h2>
        <div className={styles.categoryGrid}>
          {categories.map((category, idx) => (
            <div
              key={idx}
              className={`${styles.categoryCard} ${styles[category.colorScheme]}`}
            >
              <span className={styles.categoryLabel}>
                {category.label}
              </span>
              <div className={styles.iconContainer}>
                <img
                  src={category.icon}
                  alt={`${category.label} icon`}
                  className={styles.categoryIcon}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
