import React, { useState } from "react";

function ImageWithPlaceholder({ primarySrc, hoverSrc, alt }) {
  const [isLoaded, setIsLoaded] = useState(false); // Track image loading

  return (
    <div className="image-container">
      {!isLoaded && <div className="image-placeholder"></div>} {/* Loading indicator */}
      <img
        src={primarySrc}
        alt={alt}
        className={`product-image ${isLoaded ? "loaded" : ""}`}
        onLoad={() => setIsLoaded(true)} // Set loaded state when image loads
        onMouseEnter={(e) => (e.currentTarget.src = hoverSrc)} // Hover effect
        onMouseLeave={(e) => (e.currentTarget.src = primarySrc)} // Restore primary image
      />
    </div>
  );
}

export default ImageWithPlaceholder;
