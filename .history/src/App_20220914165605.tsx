import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month-statistics" element={<MonthStatistics />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
