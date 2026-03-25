import React from 'react';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import AppRouter from '../routes/AppRouter';

export default function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}