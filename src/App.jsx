import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import './App.css';
import Dashboard from '../pages/Dashboard/index';
import CalendarComp from '../pages/Calendar/CalendarComp';

function App() {
  library.add(fas);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <Header open={open} handleOpen={handleOpen} />
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard open={open} />} />
          <Route path="/calendario" element={<CalendarComp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
