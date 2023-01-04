import React from 'react';
import Greeting from './Greeting';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" exact element={<Greeting />} />
    </Routes>
  </Router>
  );
}

export default App;
