import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/index.css';

import Login from './Login';
import Dashboard from './Home.jsx';
import Products from './Products'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
                <Route path="/products/dev" element={<Products/>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
