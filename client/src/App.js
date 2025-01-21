import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import FilterBar from './components/FilterBar';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Footer />
        {/* <FilterBar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;