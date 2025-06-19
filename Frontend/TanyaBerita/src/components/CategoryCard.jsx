import React from 'react';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ label, icon, colorScheme }) => {
  // Gabungkan kelas dasar dengan kelas warna dinamis
  const cardClasses = `${styles.card} ${styles[colorScheme]}`;
  
  return (
    <div className={cardClasses}>
      <span className={styles.label}>{label}</span>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
    </div>
  );
};

export default CategoryCard;