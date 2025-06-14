import React from 'react';
import { 
  Dumbbell, 
  Plus, 
  Search, 
  BarChart3, 
  MessageCircle, 
  User,
  Home
} from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: any) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'training', label: 'Training', icon: Dumbbell },
    { id: 'custom', label: 'Custom', icon: Plus },
    { id: 'browse', label: 'Browse', icon: Search },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'chat', label: 'AI Chat', icon: MessageCircle },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-primary-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Gfit
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                      : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <select
              value={currentPage}
              onChange={(e) => onNavigate(e.target.value)}
              className="bg-primary-50 border border-primary-200 rounded-lg px-3 py-2 text-sm font-medium text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;