import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import '../index.css';

import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import CreateProducts from './pages/createProducts/createProducts.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
                <Route path="/products/dev" element={<CreateProducts />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
