// PrintedPage.js
import React, { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import Footer from "../components/Footer";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";
import Navbar from "../components/Navbar";

function PrintedPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/printed_perts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
  
        // Preload hover images
        result.forEach((item) => {
          const hoverImage = item["Image URLs"]?.find((url) =>
            url.includes("-2.jpg")
          );
          if (hoverImage) {
            const img = new Image();
            img.src = hoverImage; // Preload hover image
          }
        });
  
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <FilterBar />
      </div>
      <div>
        {data.length > 0 ? (
          <div className="product-grid">
            {data.map((item) => {
              const primaryImage =
                item["Image URLs"]?.find((url) => url.includes("-1.jpg")) ||
                item["Image URLs"]?.[0]; // Default to -1.jpg or first image
              const hoverImage =
                item["Image URLs"]?.find((url) => url.includes("-2.jpg")) ||
                primaryImage; // Fallback to primary image if -2.jpg is missing
              return (
                <div key={item._id} className="product-item">
                  <ImageWithPlaceholder
                    primarySrc={primaryImage}
                    hoverSrc={hoverImage}
                    alt={item.Title || "No Title"}
                  />
                  <h3 className="product-title">{item.Title || "No Title"}</h3>
                  <div className="price-row">
                    <span className="regular-price">
                      {item["Regular Price"] || "N/A"}
                    </span>
                    <span className="sale-price">
                      {item["Sale Price"] || "N/A"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>No data found</div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default PrintedPage;