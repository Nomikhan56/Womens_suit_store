import React from 'react';
import CategoryGrid from '../components/CategoryGrid'; // Import Category Grid
import Footer from '../components/Footer'; // Import Footer
import ImageSlider from '../components/ImageSlider'; // Import Image Slider
import Navbar from '../components/Navbar'; // Import Navbar

function HomePage() {
  return (
    <div>
      <Navbar /> {/* Include Navbar */}
      <ImageSlider />
      <CategoryGrid />
      <Footer /> {/* Include Footer */}
    </div>
  );
}

export default HomePage;