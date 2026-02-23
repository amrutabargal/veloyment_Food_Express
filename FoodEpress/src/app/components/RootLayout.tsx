import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartProvider } from '../context/CartContext';

export function RootLayout() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
