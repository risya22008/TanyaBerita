import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ label, icon, colorScheme = 'light' }) => {
  const navigate = useNavigate();
  const cardClasses = `${styles.card} ${styles[colorScheme] || styles.light}`;

  return (
    <div
      className={cardClasses}
      style={{ cursor: 'pointer' }}
      onClick={() => navigate('/articles?category=' + encodeURIComponent(label))}
    >
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