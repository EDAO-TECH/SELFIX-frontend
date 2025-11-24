import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center text-sm text-slate-500 mb-6 overflow-x-auto whitespace-nowrap py-2" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-blue-600 transition-colors flex items-center">
        <Home size={16} />
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={16} className="mx-2 text-slate-400 flex-shrink-0" />
          {item.path ? (
            <Link to={item.path} className="hover:text-blue-600 transition-colors font-medium">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-900 font-semibold">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;