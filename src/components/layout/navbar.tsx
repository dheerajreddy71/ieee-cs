import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600">KARE IEEE CS</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 text-gray-900">
                Home
              </Link>
              <Link to="/events" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                Events
              </Link>
              <Link to="/members" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                Members
              </Link>
              <Link to="/contact" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <Link to="/admin">
              <Button variant="primary" size="sm">
                Admin Login
              </Button>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-blue-500 text-blue-700 bg-blue-50"
            >
              Home
            </Link>
            <Link
              to="/events"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Events
            </Link>
            <Link
              to="/members"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Members
            </Link>
            <Link
              to="/contact"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </Link>
            <Link
              to="/admin"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Admin Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}