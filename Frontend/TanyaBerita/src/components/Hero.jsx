import React from 'react';
import styles from './Hero.module.css';
import heroIllustration from '../assets/hero-illustration.png';

const Hero = () => {
  return (
    <section id="home" className={`${styles.hero} container`}>
      <div className={styles.heroText}>
        <h1>Selamat datang di TanyaBerita!</h1>
        <p>Temukan informasi terkini, ringkasan cerdas, dan jawaban atas rasa ingin tahu.</p>
        <button className={styles.heroButton}>Baca Berita Sekarang</button>
      </div>
      <div className={styles.heroImage}>
        <img src={heroIllustration} alt="Illustration of a megaphone" />
      </div>
    </section>
  );
};

export default Hero;