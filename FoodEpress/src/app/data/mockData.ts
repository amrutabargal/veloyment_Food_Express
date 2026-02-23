// Mock data for the food delivery app

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewsCount: number;
  deliveryTime: string;
  priceRange: string;
  cuisines: string[];
  isOpen: boolean;
  distance: string;
  categories: string[];
  isVeg?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  rating?: number;
  bestseller?: boolean;
}

export interface Order {
  id: string;
  restaurantName: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  status: 'preparing' | 'on-the-way' | 'delivered' | 'cancelled';
  date: string;
  estimatedTime?: string;
}

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Paradise',
    image: 'https://images.unsplash.com/photo-1634435334343-27e5d92a7870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2QlMjBjbG9zZXVwfGVufDF8fHx8MTc3MDc5NzAyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    reviewsCount: 1250,
    deliveryTime: '30-35 min',
    priceRange: '₹₹',
    cuisines: ['Italian', 'Pizza', 'Fast Food'],
    isOpen: true,
    distance: '2.5 km',
    categories: ['Pizza', 'Pasta', 'Salads', 'Beverages'],
  },
  {
    id: '2',
    name: 'Burger House',
    image: 'https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBnb3VybWV0JTIwZm9vZHxlbnwxfHx8fDE3NzA3MDM1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.3,
    reviewsCount: 890,
    deliveryTime: '25-30 min',
    priceRange: '₹₹',
    cuisines: ['American', 'Burgers', 'Fast Food'],
    isOpen: true,
    distance: '1.8 km',
    categories: ['Burgers', 'Sides', 'Shakes', 'Desserts'],
  },
  {
    id: '3',
    name: 'Biryani Express',
    image: 'https://images.unsplash.com/photo-1714611626323-5ba6204453be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwaW5kaWFuJTIwZm9vZHxlbnwxfHx8fDE3NzA3MDMwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    reviewsCount: 2340,
    deliveryTime: '35-40 min',
    priceRange: '₹₹₹',
    cuisines: ['Indian', 'Biryani', 'Mughlai'],
    isOpen: true,
    distance: '3.2 km',
    categories: ['Biryani', 'Curries', 'Tandoor', 'Breads'],
  },
  {
    id: '4',
    name: 'Dragon Wok',
    image: 'https://images.unsplash.com/photo-1716535232835-6d56282dfe8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbm9vZGxlcyUyMGZvb2R8ZW58MXx8fHwxNzcwNzg3Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.4,
    reviewsCount: 1120,
    deliveryTime: '30-35 min',
    priceRange: '₹₹',
    cuisines: ['Chinese', 'Asian', 'Noodles'],
    isOpen: true,
    distance: '2.1 km',
    categories: ['Noodles', 'Rice', 'Starters', 'Soups'],
  },
  {
    id: '5',
    name: 'Sweet Dreams Bakery',
    image: 'https://images.unsplash.com/photo-1700738055098-b0e685912344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZSUyMHN3ZWV0fGVufDF8fHx8MTc3MDc5Mjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviewsCount: 980,
    deliveryTime: '20-25 min',
    priceRange: '₹₹',
    cuisines: ['Desserts', 'Bakery', 'Cakes'],
    isOpen: true,
    distance: '1.5 km',
    categories: ['Cakes', 'Pastries', 'Cookies', 'Beverages'],
  },
  {
    id: '6',
    name: 'Sushi Master',
    image: 'https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NzA3ODQxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviewsCount: 765,
    deliveryTime: '40-45 min',
    priceRange: '₹₹₹₹',
    cuisines: ['Japanese', 'Sushi', 'Asian'],
    isOpen: false,
    distance: '4.5 km',
    categories: ['Sushi', 'Rolls', 'Ramen', 'Appetizers'],
  },
];

export const mockMenuItems: Record<string, MenuItem[]> = {
  '1': [
    {
      id: 'm1',
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato, mozzarella, and basil',
      price: 299,
      image: 'https://images.unsplash.com/photo-1634435334343-27e5d92a7870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2QlMjBjbG9zZXVwfGVufDF8fHx8MTc3MDc5NzAyNXww&ixlib=rb-4.1.0&q=80&w=400',
      category: 'Pizza',
      isVeg: true,
      rating: 4.5,
      bestseller: true,
    },
    {
      id: 'm2',
      name: 'Pepperoni Pizza',
      description: 'Loaded with pepperoni and extra cheese',
      price: 399,
      image: 'https://images.unsplash.com/photo-1634435334343-27e5d92a7870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2QlMjBjbG9zZXVwfGVufDF8fHx8MTc3MDc5NzAyNXww&ixlib=rb-4.1.0&q=80&w=400',
      category: 'Pizza',
      isVeg: false,
      rating: 4.6,
    },
    {
      id: 'm3',
      name: 'Pasta Alfredo',
      description: 'Creamy white sauce pasta with garlic bread',
      price: 249,
      image: 'https://images.unsplash.com/photo-1634435334343-27e5d92a7870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2QlMjBjbG9zZXVwfGVufDF8fHx8MTc3MDc5NzAyNXww&ixlib=rb-4.1.0&q=80&w=400',
      category: 'Pasta',
      isVeg: true,
      rating: 4.3,
    },
    {
      id: 'm4',
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with Caesar dressing',
      price: 199,
      image: 'https://images.unsplash.com/photo-1634435334343-27e5d92a7870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2QlMjBjbG9zZXVwfGVufDF8fHx8MTc3MDc5NzAyNXww&ixlib=rb-4.1.0&q=80&w=400',
      category: 'Salads',
      isVeg: true,
      rating: 4.2,
    },
  ],
  '2': [
    {
      id: 'm5',
      name: 'Classic Beef Burger',
      description: 'Juicy beef patty with lettuce, tomato, and special sauce',
      price: 249,
      image: 'https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBnb3VybWV0JTIwZm9vZHxlbnwxfHx8fDE3NzA3MDM1OTN8MA&ixlib=rb-4.1.0&q=80&w=400',
      category: 'Burgers',
      isVeg: false,
      rating: 4.5,
      bestseller: true,
    },
    {
      id: 'm6',
      name: 'Veggie Delight Burger',
      description: 'Grilled veggie patty with fresh vegetables',
      price: 199,
      image: 'https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBnb3VybWV0JTIwZm9vZHxlbnwxfHx8fDE3NzA3MDM1OTN8MA&ixlib=rb-4.1.0&q=80&w=400',
      category: 'Burgers',
      isVeg: true,
      rating: 4.3,
    },
    {
      id: 'm7',
      name: 'French Fries',
      description: 'Crispy golden fries with seasoning',
      price: 99,
      image: 'https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBnb3VybWV0JTIwZm9vZHxlbnwxfHx8fDE3NzA3MDM1OTN8MA&ixlib=rb-4.1.0&q=80&w=400',
      category: 'Sides',
      isVeg: true,
      rating: 4.4,
    },
  ],
};

export const mockOrders: Order[] = [
  {
    id: 'ORD001',
    restaurantName: 'Pizza Paradise',
    items: [
      { name: 'Margherita Pizza', quantity: 1, price: 299 },
      { name: 'Pasta Alfredo', quantity: 1, price: 249 },
    ],
    total: 548,
    status: 'on-the-way',
    date: '2026-02-11',
    estimatedTime: '15 min',
  },
  {
    id: 'ORD002',
    restaurantName: 'Burger House',
    items: [
      { name: 'Classic Beef Burger', quantity: 2, price: 249 },
      { name: 'French Fries', quantity: 1, price: 99 },
    ],
    total: 597,
    status: 'delivered',
    date: '2026-02-10',
  },
  {
    id: 'ORD003',
    restaurantName: 'Biryani Express',
    items: [{ name: 'Chicken Biryani', quantity: 2, price: 349 }],
    total: 698,
    status: 'delivered',
    date: '2026-02-09',
  },
];

export const categories = [
  {
    id: 'pizza',
    name: 'Pizza',
    image: 'https://images.unsplash.com/photo-1634435334343-27e5d92a7870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2QlMjBjbG9zZXVwfGVufDF8fHx8MTc3MDc5NzAyNXww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'burger',
    name: 'Burger',
    image: 'https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBnb3VybWV0JTIwZm9vZHxlbnwxfHx8fDE3NzA3MDM1OTN8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'biryani',
    name: 'Biryani',
    image: 'https://images.unsplash.com/photo-1714611626323-5ba6204453be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwaW5kaWFuJTIwZm9vZHxlbnwxfHx8fDE3NzA3MDMwMjZ8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'chinese',
    name: 'Chinese',
    image: 'https://images.unsplash.com/photo-1716535232835-6d56282dfe8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbm9vZGxlcyUyMGZvb2R8ZW58MXx8fHwxNzcwNzg3Njk4fDA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    image: 'https://images.unsplash.com/photo-1700738055098-b0e685912344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZSUyMHN3ZWV0fGVufDF8fHx8MTc3MDc5Mjg0Mnww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 'sushi',
    name: 'Sushi',
    image: 'https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NzA3ODQxODZ8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
];
