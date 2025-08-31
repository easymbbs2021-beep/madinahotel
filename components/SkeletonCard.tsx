
import React from 'react';

const SkeletonCard: React.FC = () => (
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden animate-pulse">
    <div className="bg-gray-200 h-56 w-full"></div>
    <div className="p-6">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="flex justify-between items-center mt-6">
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        <div className="h-12 bg-gray-200 rounded-md w-1/3"></div>
      </div>
    </div>
  </div>
);

export default SkeletonCard;