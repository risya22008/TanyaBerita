import React from 'react';
import CategoryCard from './CategoryCard';
import styles from './CategorySection.module.css'; // PASTIKAN IMPORT INI ADA

// Impor ikon dari react-icons
import { 
  FaRegNewspaper, FaLandmark, FaGlobeAmericas, FaUsers, FaLaptopCode, FaFilm, FaFutbol,
  FaHeartbeat, FaGraduationCap, FaPaintBrush, FaCar, FaGavel, FaLeaf, FaHandsHelping, FaLightbulb
} from 'react-icons/fa';

// GUNAKAN ARRAY DATA INI
const categories = [
    { label: "Berita Umum", icon: <FaRegNewspaper />, colorScheme: "light" },
    { label: "Nasional", icon: <FaLandmark />, colorScheme: "yellow" },
    { label: "Internasional", icon: <FaGlobeAmericas />, colorScheme: "dark" },
    { label: "Politik", icon: <FaUsers />, colorScheme: "light" },
    { label: "Teknologi", icon: <FaLaptopCode />, colorScheme: "yellow" },
    { label: "Hiburan", icon: <FaFilm />, colorScheme: "dark" },
    { label: "Olahraga", icon: <FaFutbol />, colorScheme: "light" },
    { label: "Kesehatan", icon: <FaHeartbeat />, colorScheme: "yellow" },
    { label: "Pendidikan", icon: <FaGraduationCap />, colorScheme: "dark" },
    { label: "Lifestyle", icon: <FaPaintBrush />, colorScheme: "light" },
    { label: "Otomotif", icon: <FaCar />, colorScheme: "yellow" },
    { label: "Hukum & Kriminal", icon: <FaGavel />, colorScheme: "dark" },
    { label: "Lingkungan", icon: <FaLeaf />, colorScheme: "light" },
    { label: "Humaniora", icon: <FaHandsHelping />, colorScheme: "yellow" },
    { label: "Inspiratif", icon: <FaLightbulb />, colorScheme: "dark" },
];

const CategorySection = () => {
  return (
    <section id="category" className={`${styles.categorySection} container`}>
      <h2 className={styles.title}>Category</h2>
      <div className={styles.grid}>
        {categories.map((cat, index) => (
          <CategoryCard
            key={index}
            label={cat.label}
            icon={cat.icon}
            colorScheme={cat.colorScheme}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;