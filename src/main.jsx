import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

// import style
import './styles/index.css';
import { ToastContainer } from 'react-toastify';
import NotifyApp from './NotifyApp';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <NotifyApp />
    </BrowserRouter>
  </StrictMode>
);
