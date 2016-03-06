import React from 'react';
import { Header } from './header.jsx';
import { Footer } from './footer.jsx';

export const MainLayout = ({ content }) => (
  <div>
    <Header />

    <div style={{ alignItems: 'stretch' }}>
      {content}
    </div>

    <Footer />
  </div>
)