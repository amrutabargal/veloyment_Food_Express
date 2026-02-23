import { createBrowserRouter } from 'react-router';
import { LandingPage } from './pages/LandingPage';
import { RestaurantListingPage } from './pages/RestaurantListingPage';
import { RestaurantDetailPage } from './pages/RestaurantDetailPage';
import { CartPage } from './pages/CartPage';
import { UserDashboard } from './pages/UserDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { RootLayout } from './components/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: LandingPage },
      { path: 'restaurants', Component: RestaurantListingPage },
      { path: 'restaurant/:id', Component: RestaurantDetailPage },
      { path: 'cart', Component: CartPage },
      { path: 'dashboard', Component: UserDashboard },
      { path: 'admin', Component: AdminDashboard },
    ],
  },
]);
