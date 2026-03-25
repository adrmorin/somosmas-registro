import React from 'react';
import { Navigate } from 'react-router-dom';

// English root just redirects to blog-en equivalent
export default function EnglishHome() {
    return <Navigate to="/blog" replace />;
}
