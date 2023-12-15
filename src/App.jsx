import { useState } from 'react';
import Dashboard from '../pages/Dashboard';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';

function App() {
  library.add(fas);
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
