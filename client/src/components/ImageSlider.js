import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; // Import arrows
import image1 from '../assests/1.webp'; // Update path according to your project structure
import image2 from '../assests/2.webp'; // Update path according to your project structure
import mobileImage1 from '../assests/mobile_1.png';
import mobileImage2 from '../assests/mobile_2.png';
import '../css/ImageSlider.css';

function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Select images based on screen size
  const images = isMobile 
    ? [mobileImage1, mobileImage2]  // Mobile images
    : [image1, image2];             // Desktop images

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div className="slider-container">
      <AnimatePresence mode='wait'>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          alt={`Slide ${currentImage + 1}`}
          className="slider-image"
        />
      </AnimatePresence>

      <button className="slider-arrow left-arrow" onClick={prevSlide}>
        <BsChevronLeft size={30} />
      </button>
      <button className="slider-arrow right-arrow" onClick={nextSlide}>
        <BsChevronRight size={30} />
      </button>
    </div>
  );
}

export default ImageSlider;