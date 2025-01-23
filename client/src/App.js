import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrintedPage from './pages/Printed_Pert'; // Import the new page

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Printed_Pert" element={<PrintedPage />} /> {/* Ensure correct route */}
          {/* Add other routes as needed */}
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;