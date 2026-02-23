import { useState } from 'react';
import { Link } from 'react-router';
import { Star, Clock, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { mockRestaurants } from '../data/mockData';

export function RestaurantListingPage() {
  const [filters, setFilters] = useState({
    veg: false,
    nonVeg: false,
    rating4Plus: false,
    fastDelivery: false,
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(true);

  const filteredRestaurants = mockRestaurants.filter((restaurant) => {
    if (filters.veg && !restaurant.isVeg) return false;
    if (filters.rating4Plus && restaurant.rating < 4) return false;
    if (filters.fastDelivery && parseInt(restaurant.deliveryTime) > 30) return false;
    return true;
  });

  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'deliveryTime') return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
    if (sortBy === 'distance') return parseFloat(a.distance) - parseFloat(b.distance);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#121212] mb-2">All Restaurants</h1>
          <p className="text-gray-600">
            Discover {sortedRestaurants.length} restaurants near you
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
          </Button>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="deliveryTime">Delivery Time</SelectItem>
                <SelectItem value="distance">Distance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="font-bold text-lg text-[#121212] mb-4">Filters</h2>

                {/* Food Type */}
                <div className="mb-6">
                  <h3 className="font-semibold text-sm text-gray-700 mb-3">Food Type</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="veg"
                        checked={filters.veg}
                        onCheckedChange={(checked) =>
                          setFilters({ ...filters, veg: !!checked })
                        }
                      />
                      <Label htmlFor="veg" className="text-sm cursor-pointer">
                        Vegetarian
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="nonVeg"
                        checked={filters.nonVeg}
                        onCheckedChange={(checked) =>
                          setFilters({ ...filters, nonVeg: !!checked })
                        }
                      />
                      <Label htmlFor="nonVeg" className="text-sm cursor-pointer">
                        Non-Vegetarian
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <h3 className="font-semibold text-sm text-gray-700 mb-3">Rating</h3>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rating4Plus"
                      checked={filters.rating4Plus}
                      onCheckedChange={(checked) =>
                        setFilters({ ...filters, rating4Plus: !!checked })
                      }
                    />
                    <Label htmlFor="rating4Plus" className="text-sm cursor-pointer">
                      4.0+ Rating
                    </Label>
                  </div>
                </div>

                {/* Delivery Time */}
                <div className="mb-6">
                  <h3 className="font-semibold text-sm text-gray-700 mb-3">Delivery Time</h3>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="fastDelivery"
                      checked={filters.fastDelivery}
                      onCheckedChange={(checked) =>
                        setFilters({ ...filters, fastDelivery: !!checked })
                      }
                    />
                    <Label htmlFor="fastDelivery" className="text-sm cursor-pointer">
                      Fast Delivery (30 min or less)
                    </Label>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setFilters({ veg: false, nonVeg: false, rating4Plus: false, fastDelivery: false })}
                >
                  Clear All
                </Button>
              </div>
            </aside>
          )}

          {/* Restaurant Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedRestaurants.map((restaurant) => (
                <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {restaurant.isOpen ? (
                        <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Open Now
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
                      <p className="text-sm text-gray-600 mb-2 line-clamp-1">
                        {restaurant.cuisines.join(', ')}
                      </p>
                      <div className="flex items-center justify-between text-sm mb-2">
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
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{restaurant.priceRange}</span>
                        <span className="text-gray-600">{restaurant.distance}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {sortedRestaurants.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No restaurants found matching your filters.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setFilters({ veg: false, nonVeg: false, rating4Plus: false, fastDelivery: false })}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
