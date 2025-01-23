import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import printed from '../assests/printed_pert.webp';
import Pert from '../assests/Ready _to_wear.jpg';
import shawls from '../assests/Shawls.jpg';
import unsEmd from '../assests/Uns-Emb.jpg';
import unsPrinted from '../assests/uns_printed.png';
import '../css/CategoryGrid.css';

function CategoryGrid() {
  const categories = [
    { image: printed, link: '/Printed_Pert' }, // Link for printed image
    { image: shawls },
    { image: unsPrinted },
    { image: unsEmd },
    { image: Pert }
  ];

  return (
    <div className="category-container">
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <Link to={category.link || '#'}> {/* Use Link for navigation */}
              <img src={category.image} alt={category.title} />
            </Link>
            {/* <h3>{category.title}</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;