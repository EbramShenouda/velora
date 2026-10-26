import React, { useState, useEffect } from 'react';
import { CatalogProvider } from './context/CatalogContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';

export const App: React.FC = () => {
  // Simple, rock-solid client router supporting both /admin and #admin
  const [currentRoute, setCurrentRoute] = useState<'home' | 'admin'>(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path === '/admin' || path.startsWith('/admin/') || hash === '#admin') {
      return 'admin';
    }
    return 'home';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/admin' || path.startsWith('/admin/') || hash === '#admin') {
        setCurrentRoute('admin');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (route: 'home' | 'admin') => {
    setCurrentRoute(route);
    if (route === 'admin') {
      window.location.hash = 'admin';
    } else {
      window.location.hash = '';
      window.history.pushState(null, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AuthProvider>
      <CatalogProvider>
        <CartProvider>
          {currentRoute === 'admin' ? (
            <AdminPage onBackToStore={() => navigateTo('home')} />
          ) : (
            <HomePage onNavigateToAdmin={() => navigateTo('admin')} />
          )}
        </CartProvider>
      </CatalogProvider>
    </AuthProvider>
  );
};

export default App;
