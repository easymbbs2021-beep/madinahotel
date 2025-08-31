
import React from 'react';

interface MapPlaceholderProps {
  driverPosition: { x: number; y: number }; // Position as percentage (0-100)
}

const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ driverPosition }) => {
  return (
    <div className="relative w-full h-64 md:h-80 bg-amber-50 rounded-lg overflow-hidden border-2 border-amber-200">
      {/* Mock map texture */}
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e7d8b7" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Route Line */}
      <svg width="100%" height="100%" className="absolute inset-0">
        <line x1="15%" y1="80%" x2="85%" y2="20%" stroke="#a16207" strokeWidth="3" strokeDasharray="8 4" />
      </svg>

      {/* Restaurant Icon */}
      <div className="absolute top-[80%] left-[15%] -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="bg-slate-800 text-white p-2 rounded-full shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </div>
        <span className="text-xs font-bold text-slate-700 mt-1 block">Restaurant</span>
      </div>

      {/* Home Icon */}
      <div className="absolute top-[20%] left-[85%] -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="bg-emerald-600 text-white p-2 rounded-full shadow-lg">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-xs font-bold text-emerald-700 mt-1 block">Your Home</span>
      </div>
      
      {/* Driver Icon */}
      <div 
        className="absolute transition-all duration-1000 ease-linear"
        style={{ top: `${driverPosition.y}%`, left: `${driverPosition.x}%`, transform: 'translate(-50%, -50%)' }}
      >
        <div className="bg-sky-500 text-white p-2.5 rounded-full shadow-xl animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v2a1 1 0 01-1 1h-3a1 1 0 00-1-1V5.5a.5.5 0 00-1 0V7a1 1 0 001 1h3a1 1 0 011 1v2a1 1 0 01-1 1h-3a1 1 0 00-1-1v-1.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1H4a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1V3.5z" /></svg>
        </div>
      </div>
    </div>
  );
};

export default MapPlaceholder;
