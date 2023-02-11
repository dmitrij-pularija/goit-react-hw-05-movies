import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'modern-normalize';
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </StrictMode>
);