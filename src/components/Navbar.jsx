import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-auto text-indigo-600" />
            <span className="text-xl font-bold text-gray-800 tracking-tight">SELFIX</span>
          </Link>

          {/* Navigation links */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/pricing" className="text-gray-600 hover:text-indigo-600 font-medium">
              Pricing
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-indigo-600 font-medium">
              Login
            </Link>
          </nav>

          {/* Mobile menu (optional for future) */}
          {/* You can add a hamburger menu here */}
        </div>
      </div>
    </header>
  );
}
