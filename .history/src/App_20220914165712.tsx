import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month-statistics" element={<MonthStatistics />} />
      </Routes>
    </div>
  );
};

export default App;
