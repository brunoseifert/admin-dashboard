import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import './App.css';

function App() {
  library.add(fas);
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
