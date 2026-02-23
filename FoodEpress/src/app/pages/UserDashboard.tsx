import { useState } from 'react';
import { Package, Clock, CheckCircle, XCircle, MapPin, User, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { mockOrders } from '../data/mockData';

export function UserDashboard() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
  });

  const [addresses] = useState([
    { id: '1', label: 'Home', address: '123 Main Street, Mumbai, Maharashtra 400001' },
    { id: '2', label: 'Work', address: '456 Corporate Plaza, Mumbai, Maharashtra 400051' },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'preparing':
        return 'bg-blue-100 text-blue-700';
      case 'on-the-way':
        return 'bg-yellow-100 text-yellow-700';
      case 'delivered':
        return 'bg-green-100 text-green-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'preparing':
        return <Clock className="h-4 w-4" />;
      case 'on-the-way':
        return <Package className="h-4 w-4" />;
      case 'delivered':
        return <CheckCircle className="h-4 w-4" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#121212] mb-8">My Dashboard</h1>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="orders" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>My Orders</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Addresses</span>
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <div className="space-y-4">
              {mockOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-[#121212]">
                        Order #{order.id}
                      </h3>
                      <p className="text-sm text-gray-600">{order.restaurantName}</p>
                      <p className="text-xs text-gray-500 mt-1">{order.date}</p>
                    </div>
                    <div className="mt-3 md:mt-0">
                      <span
                        className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {getStatusIcon(order.status)}
                        <span className="capitalize">{order.status.replace('-', ' ')}</span>
                      </span>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-2 mb-4">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between text-sm border-b pb-2 last:border-0"
                      >
                        <span className="text-gray-700">
                          {item.name} x {item.quantity}
                        </span>
                        <span className="font-semibold">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Total and Status */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="font-bold text-lg">
                      Total: <span className="text-[#E53935]">₹{order.total}</span>
                    </div>
                    {order.status === 'on-the-way' && order.estimatedTime && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-[#E53935]" />
                        <span className="text-gray-600">
                          Arriving in {order.estimatedTime}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Live Tracking for Active Orders */}
                  {order.status === 'on-the-way' && (
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-sm">Order Tracking</h4>
                        <Button variant="outline" size="sm">
                          Track Live
                        </Button>
                      </div>
                      <div className="relative">
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col items-center flex-1">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xs text-gray-600 mt-2">Confirmed</span>
                          </div>
                          <div className="flex-1 h-1 bg-green-500 -mx-2" />
                          <div className="flex flex-col items-center flex-1">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xs text-gray-600 mt-2">Preparing</span>
                          </div>
                          <div className="flex-1 h-1 bg-[#E53935] -mx-2 animate-pulse" />
                          <div className="flex flex-col items-center flex-1">
                            <div className="w-8 h-8 bg-[#E53935] rounded-full flex items-center justify-center animate-pulse">
                              <Package className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xs text-gray-600 mt-2">On the way</span>
                          </div>
                          <div className="flex-1 h-1 bg-gray-200 -mx-2" />
                          <div className="flex flex-col items-center flex-1">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-5 w-5 text-gray-400" />
                            </div>
                            <span className="text-xs text-gray-600 mt-2">Delivered</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {mockOrders.length === 0 && (
                <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                  <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-gray-700 mb-2">
                    No orders yet
                  </h3>
                  <p className="text-gray-500">Start ordering your favorite food!</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="font-bold text-xl text-[#121212] mb-6 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-[#E53935]" />
                Profile Settings
              </h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  />
                </div>
                <Button className="bg-[#E53935] hover:bg-[#C62828]">
                  Save Changes
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses">
            <div className="space-y-4">
              {addresses.map((addr) => (
                <div key={addr.id} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-[#E53935] mt-1" />
                      <div>
                        <h3 className="font-bold text-lg text-[#121212]">{addr.label}</h3>
                        <p className="text-gray-600">{addr.address}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <Button className="bg-[#E53935] hover:bg-[#C62828]">
                Add New Address
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
