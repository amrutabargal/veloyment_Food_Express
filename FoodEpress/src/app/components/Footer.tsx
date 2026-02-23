import { Facebook, Twitter, Instagram, Smartphone } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#121212] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About FoodExpress</h3>
            <p className="text-gray-400 text-sm">
              Your favorite food delivered hot & fresh to your doorstep. Fast,
              reliable, and delicious!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/restaurants" className="text-gray-400 hover:text-[#E53935]">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-[#E53935]">
                  My Orders
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E53935]">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E53935]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: support@foodexpress.com</li>
              <li>Phone: +91 1234567890</li>
              <li>Address: Mumbai, India</li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-bold text-lg mb-4">Download App</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-2 transition-colors">
                <Smartphone className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="w-full flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-2 transition-colors">
                <Smartphone className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2026 FoodExpress. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="bg-gray-800 hover:bg-[#E53935] p-2 rounded-full transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-[#E53935] p-2 rounded-full transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-[#E53935] p-2 rounded-full transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
