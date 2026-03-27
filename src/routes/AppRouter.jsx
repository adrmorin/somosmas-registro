import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import Clubes from '../pages/Clubes/Clubes';
import Documentos from '../pages/Documentos/Documentos';
import Portal from '../pages/Portal/Portal';
import Colabora from '../pages/Colabora/Colabora';
import Sumate from '../pages/Sumate/Sumate';
import Somos from '../pages/Somos/Somos';
import EnglishHome from '../pages/EnglishHome/EnglishHome';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/clubes" element={<Clubes />} />
                <Route path="/documentos" element={<Documentos />} />
                <Route path="/portal" element={<Portal />} />
                <Route path="/colabora" element={<Colabora />} />
                <Route path="/sumate" element={<Sumate />} />
                <Route path="/somos" element={<Somos />} />
                <Route path="/en" element={<EnglishHome />} />
            </Routes>
        </BrowserRouter>
    );
}