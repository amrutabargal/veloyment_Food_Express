import { Search, MapPin, Clock, Star, TrendingUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { mockRestaurants, categories } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-[#E53935] to-[#C62828] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1613274554329-70f997f5789f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzcwNzQ0MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
              Order Your Favorite Food Online
            </h1>
            <p className="text-white/90 text-xl mb-8">
              Get hot & fresh food delivered to your doorstep in minutes
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-2xl p-2 flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center space-x-2 px-3 py-2 border-b md:border-b-0 md:border-r border-gray-200">
                <MapPin className="h-5 w-5 text-[#E53935]" />
                <Input
                  placeholder="Enter your location"
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="flex-1 flex items-center space-x-2 px-3">
                <Search className="h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search restaurants, dishes..."
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Link to="/restaurants">
                <Button className="bg-[#E53935] hover:bg-[#C62828] text-white w-full md:w-auto">
                  Search
                </Button>
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Link to="/restaurants">
                <Button
                  size="lg"
                  className="bg-white text-[#E53935] hover:bg-gray-100"
                >
                  Order Now
                </Button>
              </Link>
              <Link to="/restaurants">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Explore Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#121212]">Popular Categories</h2>
            <Link to="/restaurants">
              <Button variant="ghost" className="text-[#E53935]">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.id} to="/restaurants">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#121212]">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#121212]">Featured Restaurants</h2>
            <Link to="/restaurants">
              <Button variant="ghost" className="text-[#E53935]">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockRestaurants.slice(0, 6).map((restaurant) => (
              <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {restaurant.isOpen ? (
                      <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Open
                      </span>
                    ) : (
                      <span className="absolute top-3 left-3 bg-gray-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Closed
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-[#121212] mb-1">
                      {restaurant.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {restaurant.cuisines.join(', ')}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-[#E53935] text-[#E53935]" />
                        <span className="font-semibold">{restaurant.rating}</span>
                        <span className="text-gray-500">
                          ({restaurant.reviewsCount})
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{restaurant.deliveryTime}</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-gray-600">{restaurant.priceRange}</span>
                      <span className="text-gray-600">{restaurant.distance}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gradient-to-r from-[#E53935] to-[#C62828]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center space-x-2 text-white mb-4">
                <TrendingUp className="h-6 w-6" />
                <span className="font-bold text-lg">50% OFF</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">
                First Order Discount
              </h3>
              <p className="text-white/90 mb-4">
                Get 50% off on your first order. Limited time offer!
              </p>
              <Link to="/restaurants">
                <Button className="bg-white text-[#E53935] hover:bg-gray-100">
                  Order Now
                </Button>
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center space-x-2 text-white mb-4">
                <TrendingUp className="h-6 w-6" />
                <span className="font-bold text-lg">FREE DELIVERY</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">
                Free Delivery on Orders Above ₹299
              </h3>
              <p className="text-white/90 mb-4">
                No delivery charges. Order your favorite food now!
              </p>
              <Link to="/restaurants">
                <Button className="bg-white text-[#E53935] hover:bg-gray-100">
                  Explore Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#121212] text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">1. Search</h3>
              <p className="text-gray-600">
                Find your favorite restaurant or dish from our wide selection
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">2. Choose</h3>
              <p className="text-gray-600">
                Select your items and customize your order as you like
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">3. Enjoy</h3>
              <p className="text-gray-600">
                Get your food delivered hot and fresh to your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#121212] text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Rahul Sharma',
                review: 'Amazing service! Food arrived hot and fresh. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Priya Patel',
                review: 'Best food delivery app. Great variety and super fast delivery.',
                rating: 5,
              },
              {
                name: 'Amit Kumar',
                review: 'Love the discounts and offers. Makes ordering so much better!',
                rating: 4,
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#E53935] text-[#E53935]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.review}"</p>
                <p className="font-semibold text-[#121212]">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
