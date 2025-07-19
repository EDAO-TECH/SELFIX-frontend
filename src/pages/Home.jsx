import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/SELFIX_officiall_logo.svg';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 text-center">
      <Logo className="w-32 h-32 text-indigo-600 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to SELFIX</h1>
      <p className="text-gray-600 max-w-xl mb-6">
        The trusted cyber healing platform. Protect your systems, heal from threats, and ensure compliance with our AI-driven engine.
      </p>
      <Link
        to="/pricing"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow"
      >
        View Pricing Plans
      </Link>
    </div>
  );
}
