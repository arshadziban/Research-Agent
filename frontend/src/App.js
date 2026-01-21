import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResearchAgent from './components/ResearchAgent';
import Documentation from './components/Documentation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResearchAgent />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </Router>
  );
}

export default App;
