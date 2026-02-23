import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Star, Clock, MapPin, ArrowLeft, Plus, Minus, ShoppingCart, Leaf } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { mockRestaurants, mockMenuItems } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export function RestaurantDetailPage() {
  const { id } = useParams();
  const restaurant = mockRestaurants.find((r) => r.id === id);
  const menuItems = mockMenuItems[id || '1'] || mockMenuItems['1'];
  const { addToCart, items } = useCart();

  const [quantities, setQuantities] = useState<Record<string, number>>({});

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
          <Link to="/restaurants">
            <Button>Back to Restaurants</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (itemId: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + delta),
    }));
  };

  const handleAddToCart = (item: typeof menuItems[0]) => {
    const quantity = quantities[item.id] || 1;
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
        image: item.image,
        isVeg: item.isVeg,
      });
    }
    setQuantities((prev) => ({ ...prev, [item.id]: 0 }));
    toast.success(`${item.name} added to cart!`);
  };

  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menuItems>);

  const categories = Object.keys(groupedItems);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/restaurants">
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Restaurants</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Restaurant Banner */}
      <div className="relative h-80 bg-gradient-to-r from-[#E53935] to-[#C62828]">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 -mb-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-[#121212] mb-2">
                    {restaurant.name}
                  </h1>
                  <p className="text-gray-600 mb-3">{restaurant.cuisines.join(', ')}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 fill-[#E53935] text-[#E53935]" />
                      <span className="font-semibold">{restaurant.rating}</span>
                      <span className="text-gray-500">
                        ({restaurant.reviewsCount} reviews)
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Clock className="h-5 w-5" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MapPin className="h-5 w-5" />
                      <span>{restaurant.distance}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  {restaurant.isOpen ? (
                    <span className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
                      Open Now
                    </span>
                  ) : (
                    <span className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded-full font-semibold">
                      Closed
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu Items */}
          <div className="flex-1">
            <Tabs defaultValue={categories[0]} className="w-full">
              <TabsList className="mb-6 flex-wrap h-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="px-6">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="space-y-4">
                    {groupedItems[category].map((item) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center space-x-2 mb-1">
                                  {item.isVeg ? (
                                    <div className="border-2 border-green-600 p-0.5">
                                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                                    </div>
                                  ) : (
                                    <div className="border-2 border-red-600 p-0.5">
                                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                                    </div>
                                  )}
                                  <h3 className="font-bold text-lg text-[#121212]">
                                    {item.name}
                                  </h3>
                                  {item.bestseller && (
                                    <span className="bg-[#E53935] text-white text-xs px-2 py-1 rounded">
                                      Bestseller
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 mb-2">
                                  {item.description}
                                </p>
                                {item.rating && (
                                  <div className="flex items-center space-x-1 mb-2">
                                    <Star className="h-4 w-4 fill-[#E53935] text-[#E53935]" />
                                    <span className="text-sm font-semibold">
                                      {item.rating}
                                    </span>
                                  </div>
                                )}
                                <p className="font-bold text-lg text-[#121212]">
                                  ₹{item.price}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 mt-3">
                              {quantities[item.id] > 0 ? (
                                <div className="flex items-center space-x-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleQuantityChange(item.id, -1)}
                                    className="h-8 w-8 p-0"
                                  >
                                    <Minus className="h-4 w-4" />
                                  </Button>
                                  <span className="font-semibold w-8 text-center">
                                    {quantities[item.id]}
                                  </span>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleQuantityChange(item.id, 1)}
                                    className="h-8 w-8 p-0"
                                  >
                                    <Plus className="h-4 w-4" />
                                  </Button>
                                </div>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleQuantityChange(item.id, 1)}
                                >
                                  Set Quantity
                                </Button>
                              )}
                              <Button
                                size="sm"
                                className="bg-[#E53935] hover:bg-[#C62828]"
                                onClick={() => handleAddToCart(item)}
                              >
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="font-bold text-lg text-[#121212] mb-4 flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2 text-[#E53935]" />
                Your Cart
              </h3>
              {items.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <div>
                  <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                    {items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <div className="flex items-start space-x-2">
                          {item.isVeg ? (
                            <div className="border-2 border-green-600 p-0.5 mt-1">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                            </div>
                          ) : (
                            <div className="border-2 border-red-600 p-0.5 mt-1">
                              <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                            </div>
                          )}
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-gray-500">x{item.quantity}</p>
                          </div>
                        </div>
                        <span className="font-semibold">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg mb-4">
                      <span>Total</span>
                      <span>₹{items.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
                    </div>
                    <Link to="/cart">
                      <Button className="w-full bg-[#E53935] hover:bg-[#C62828]">
                        Proceed to Checkout
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
