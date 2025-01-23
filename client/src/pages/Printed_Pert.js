import React, { useEffect, useState } from 'react';
import FilterBar from '../components/FilterBar'; // Import FilterBar
import Footer from '../components/Footer'; // Import Footer
import Navbar from '../components/Navbar'; // Import Navbar


function PrintedPage() {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/printed_perts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result); // Log the fetched data
        setData(result); // Set the array of data
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>Error: {error}</div>; // Show error message

  return (
    <div>
      <Navbar /> {/* Include Navbar */}
      <div style={{ marginTop: '80px' }}>
        <FilterBar /> {/* Include Filter Bar */}
      </div>
      <div className="content">
        {data.length > 0 ? (
          <div className="product-grid"> {/* Use the new CSS class for grid layout */}
            {data.map((item) => {
              // Find the image URL that ends with "-1.jpg"
              const primaryImage =
                item['Image URLs']?.find((url) => url.includes('-1.jpg')) ||
                item['Image URLs']?.[0]; // Fallback to the first image

              return (
                <div key={item._id} className="product-item"> {/* Use the new CSS class for each item */}
                  {primaryImage ? (
                    <img
                      src={primaryImage}
                      alt={item.Title || 'No Title'}
                      className="product-image" // Use the new CSS class for images
                    />
                  ) : (
                    <div>No image available</div>
                  )}
                  <h2 className="product-title">{item.Title || 'No Title'}</h2> {/* Use the new CSS class for title */}
                  <p className="sale-price">${item['Sale Price'] || 'N/A'}</p> {/* Sale price in bold */}
                  <p className="regular-price">
                    <span className="line-through">${item['Regular Price'] || 'N/A'}</span>
                  </p> {/* Regular price with line through */}
                </div>
              );
            })}
          </div>
        ) : (
          <div>No data found</div>
        )}
      </div>
      <Footer /> {/* Include Footer */}
    </div>
  );
}

export default PrintedPage;