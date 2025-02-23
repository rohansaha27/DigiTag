import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './marketplace_frontend/src/App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
