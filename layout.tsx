// app/layout.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
import "./globals.css"

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}