import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';

// import style
import './styles/index.css';
import ArchivePage from './pages/ArchivePage';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './pages/ErrorPage';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
