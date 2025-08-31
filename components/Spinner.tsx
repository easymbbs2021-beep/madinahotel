
import React from 'react';

const Spinner: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <div className={`${className} border-2 border-current border-t-transparent border-solid rounded-full animate-spin`}></div>
);

export default Spinner;
