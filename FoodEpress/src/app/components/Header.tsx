import { Link, useLocation } from 'react-router';
import { ShoppingCart, User, MapPin, Search } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';

export function Header() {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#E53935] rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">F</span>
            </div>
            <span className="text-xl font-bold text-[#121212]">FoodExpress</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-[#E53935] transition-colors ${
                location.pathname === '/' ? 'text-[#E53935] font-semibold' : 'text-[#121212]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/restaurants"
              className={`hover:text-[#E53935] transition-colors ${
                location.pathname === '/restaurants' ? 'text-[#E53935] font-semibold' : 'text-[#121212]'
              }`}
            >
              Restaurants
            </Link>
            <Link
              to="/dashboard"
              className={`hover:text-[#E53935] transition-colors ${
                location.pathname === '/dashboard' ? 'text-[#E53935] font-semibold' : 'text-[#121212]'
              }`}
            >
              Dashboard
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-[#E53935]" />
              <span>Mumbai, India</span>
            </div>

            <Link to="/dashboard">
              <Button variant="ghost" size="icon" className="relative">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#E53935] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            <Link to="/admin">
              <Button className="bg-[#E53935] hover:bg-[#C62828] text-white hidden sm:flex">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
