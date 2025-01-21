import React, { useEffect, useState } from 'react';
import { Col, Container, Dropdown, Form, Offcanvas, Row } from 'react-bootstrap';
import { BsChevronDown, BsChevronUp, BsFilter } from 'react-icons/bs';

function FilterBar() {
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [fabric, setFabric] = useState('');
  const [pieces, setPieces] = useState('');
  const [productType, setProductType] = useState('');
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // States for mobile dropdowns
  const [showPrice, setShowPrice] = useState(false);
  const [showFabric, setShowFabric] = useState(false);
  const [showPieces, setShowPieces] = useState(false);
  const [showProductType, setShowProductType] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const MobileFilterContent = () => (
    <div className="mobile-filter-content">
      {/* Price Range Dropdown */}
      <div className="filter-section">
        <button 
          className="filter-header" 
          onClick={() => setShowPrice(!showPrice)}
        >
          <span>Price Range</span>
          {showPrice ? <BsChevronUp /> : <BsChevronDown />}
        </button>
        {showPrice && (
          <div className="filter-content">
            <div className="d-flex gap-2 p-3">
              <Form.Control
                type="number"
                placeholder="Rs."
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
              />
              <Form.Control
                type="number"
                placeholder="Rs."
                value={priceTo}
                onChange={(e) => setPriceTo(e.target.value)}
              />
            </div>
            <button className="btn btn-dark w-100 mt-2">Apply</button>
          </div>
        )}
      </div>

      {/* Fabric Dropdown */}
      <div className="filter-section">
        <button 
          className="filter-header" 
          onClick={() => setShowFabric(!showFabric)}
        >
          <span>Fabric</span>
          {showFabric ? <BsChevronUp /> : <BsChevronDown />}
        </button>
        {showFabric && (
          <div className="filter-content">
            {['Cotton', 'Silk', 'Linen', 'Wool'].map((item) => (
              <button
                key={item}
                className="dropdown-item-btn"
                onClick={() => setFabric(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Pieces Dropdown */}
      <div className="filter-section">
        <button 
          className="filter-header" 
          onClick={() => setShowPieces(!showPieces)}
        >
          <span>Pieces</span>
          {showPieces ? <BsChevronUp /> : <BsChevronDown />}
        </button>
        {showPieces && (
          <div className="filter-content">
            {['2 Piece', '3 Piece', '4 Piece'].map((item) => (
              <button
                key={item}
                className="dropdown-item-btn"
                onClick={() => setPieces(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Type Dropdown */}
      <div className="filter-section">
        <button 
          className="filter-header" 
          onClick={() => setShowProductType(!showProductType)}
        >
          <span>Product Type</span>
          {showProductType ? <BsChevronUp /> : <BsChevronDown />}
        </button>
        {showProductType && (
          <div className="filter-content">
            {['Suits', 'Dresses', 'Coordinates', 'Separates'].map((item) => (
              <button
                key={item}
                className="dropdown-item-btn"
                onClick={() => setProductType(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Container fluid className="border-bottom py-3 bg-white">
      {isMobile ? (
        <>
          <div 
            className="d-flex align-items-center" 
            onClick={() => setShowMobileFilter(true)}
            style={{ cursor: 'pointer' }}
          >
            <BsFilter size={20} className="me-1" />
            <span className="fw-normal">Filter By</span>
          </div>

          <Offcanvas 
            show={showMobileFilter} 
            onHide={() => setShowMobileFilter(false)}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filters</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <MobileFilterContent />
            </Offcanvas.Body>
          </Offcanvas>
        </>
      ) : (
      <Row className="align-items-center g-0">
        <Col xs="auto" className="d-flex align-items-center">
          <BsFilter size={20} className="fw-bold me-1" />
          <span className="fw-normal me-2">Filter By:</span>
        </Col>

        {/* Price Range Dropdown */}
        <Col xs="auto">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="price-dropdown">
              <div className="custom-input-container">
                <Form.Control
                  placeholder="Price"
                  value={priceFrom && priceTo ? `Rs. ${priceFrom} to Rs. ${priceTo}` : ''}
                  readOnly
                  className="pe-4"
                />
                <div className="dropdown-arrow-container">
                  <BsChevronDown />
                </div>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-3" style={{ minWidth: '300px' }}>
              <Form.Group className="mb-3">
                <div className="d-flex align-items-center">
                  <span className="me-2">Rs.</span>
                  <Form.Control
                    type="number"
                    placeholder="0"
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value)}
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <div className="d-flex align-items-center">
                  <span className="me-2">Rs.</span>
                  <Form.Control
                    type="number"
                    placeholder="0"
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value)}
                  />
                </div>
              </Form.Group>

              <button
                className="btn btn-dark w-100"
                onClick={() => {
                  // Add your apply logic here
                  console.log(`Price range: Rs. ${priceFrom} to Rs. ${priceTo}`);
                }}
              >
                Apply
              </button>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

 {/* Fabric Dropdown */}
<Col xs="auto">
  <Dropdown>
    <Dropdown.Toggle as={CustomToggle} id="fabric-dropdown">
      <div className="custom-input-container">
        <Form.Control
          placeholder="Fabric"
          value={fabric}
          readOnly
          className="pe-4"
        />
        <div className="dropdown-arrow-container">
          <BsChevronDown />
        </div>
      </div>
    </Dropdown.Toggle>
    
    <Dropdown.Menu className="p-0" style={{ minWidth: '300px' }}>
      <button className="dropdown-item-btn" onClick={() => setFabric('Cotton')}>Cotton</button>
      <button className="dropdown-item-btn" onClick={() => setFabric('Silk')}>Silk</button>
      <button className="dropdown-item-btn" onClick={() => setFabric('Linen')}>Linen</button>
      <button className="dropdown-item-btn" onClick={() => setFabric('Wool')}>Wool</button>
    </Dropdown.Menu>
  </Dropdown>
</Col>

{/* Pieces Dropdown */}
<Col xs="auto">
  <Dropdown>
    <Dropdown.Toggle as={CustomToggle} id="pieces-dropdown">
      <div className="custom-input-container">
        <Form.Control
          placeholder="Pieces"
          value={pieces}
          readOnly
          className="pe-4"
        />
        <div className="dropdown-arrow-container">
          <BsChevronDown />
        </div>
      </div>
    </Dropdown.Toggle>
    
    <Dropdown.Menu className="p-0" style={{ minWidth: '300px' }}>
      <button className="dropdown-item-btn" onClick={() => setPieces('2 Piece')}>2 Piece</button>
      <button className="dropdown-item-btn" onClick={() => setPieces('3 Piece')}>3 Piece</button>
      <button className="dropdown-item-btn" onClick={() => setPieces('4 Piece')}>4 Piece</button>
    </Dropdown.Menu>
  </Dropdown>
</Col>

{/* Product Type Dropdown */}
<Col xs="auto">
  <Dropdown>
    <Dropdown.Toggle as={CustomToggle} id="type-dropdown">
      <div className="custom-input-container">
        <Form.Control
          placeholder="Product Type"
          value={productType}
          readOnly
          className="pe-4"
        />
        <div className="dropdown-arrow-container">
          <BsChevronDown />
        </div>
      </div>
    </Dropdown.Toggle>
    
    <Dropdown.Menu className="p-0" style={{ minWidth: '300px' }}>
      <button className="dropdown-item-btn" onClick={() => setProductType('Suits')}>Suits</button>
      <button className="dropdown-item-btn" onClick={() => setProductType('Dresses')}>Dresses</button>
      <button className="dropdown-item-btn" onClick={() => setProductType('Coordinates')}>Coordinates</button>
      <button className="dropdown-item-btn" onClick={() => setProductType('Separates')}>Separates</button>
    </Dropdown.Menu>
  </Dropdown>
</Col>
      </Row>
      )}
    </Container>
  );
}

// Custom Toggle Component
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    style={{ cursor: 'pointer' }}
  >
    {children}
  </div>
));

export default FilterBar;