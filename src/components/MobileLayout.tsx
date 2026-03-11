import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';

export const MobileLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const routes = ['/', '/login', '/signup', '/account'];
  const currentIndex = routes.indexOf(location.pathname);
  const pageNumber = currentIndex + 1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <div className="mobile-container flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        
        {/* Bottom Navigation Bar */}
        <div className="bg-white border-t border-gray-100 py-4 px-8 flex items-center justify-between">
          <button 
            onClick={handleHome}
            className="text-gray-500 hover:text-primary-gradient-start transition-colors"
          >
            <Home size={24} fill="currentColor" className="opacity-80" />
          </button>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`transition-colors ${currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-primary-gradient-start'}`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <span className="text-sm font-medium text-gray-600 min-w-[45px] text-center">
              <span className="text-primary-gradient-start">{pageNumber}</span> of {routes.length}
            </span>
            
            <button 
              onClick={handleNext}
              disabled={currentIndex === routes.length - 1}
              className={`transition-colors ${currentIndex === routes.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-primary-gradient-start'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
