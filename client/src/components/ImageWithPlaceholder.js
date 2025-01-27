// components/ImageWithPlaceholder.js
import React, { useEffect, useState } from "react";
import "../css/ImageWithPlaceholder.css"; // Import the CSS specific to this component

function ImageWithPlaceholder({ primarySrc, hoverSrc, alt }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Preload the hover image
    if (hoverSrc) {
      const img = new Image();
      img.src = hoverSrc;
    }
  }, [hoverSrc]);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setIsHovered(true)} // Switch to hover image
      onMouseLeave={() => setIsHovered(false)} // Revert to primary image
    >
      <img
        src={isHovered ? hoverSrc : primarySrc} // Show hover image when hovered
        alt={alt}
        style={{
          width: "100%",
          height: "360",
          borderRadius: "5px",
          transition: "opacity 0.2s ease-in-out", // Smooth transition
        }}
      />
    </div>
  );
}

export default ImageWithPlaceholder;
