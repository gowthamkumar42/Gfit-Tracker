import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Training from './pages/Training';
import Custom from './pages/Custom';
import Browse from './pages/Browse';
import Reports from './pages/Reports';
import AIChat from './pages/AIChat';
import Profile from './pages/Profile';

type Page = 'home' | 'training' | 'custom' | 'browse' | 'reports' | 'chat' | 'profile';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'training':
        return <Training />;
      case 'custom':
        return <Custom />;
      case 'browse':
        return <Browse />;
      case 'reports':
        return <Reports />;
      case 'chat':
        return <AIChat />;
      case 'profile':
        return <Profile />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="transition-all duration-300">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;