import React from 'react';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ label, icon, colorScheme = 'light' }) => {
  const cardClasses = `${styles.card} ${styles[colorScheme] || styles.light}`;

  return (
    <div className={cardClasses}>
      <span className={styles.label}>{label}</span>
      {icon && (
        <div className={styles.iconWrapper}>
          <img src={icon} alt={`${label} icon`} className={styles.icon} />
        </div>
      )}
    </div>
  );
};

export default CategoryCard;