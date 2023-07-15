import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './pages/main';
import { Work } from './pages/work';
import React from 'react';
import { KK } from './pages/kk';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/work" element={<Work />} />
        <Route path="/kk" element={<KK />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
