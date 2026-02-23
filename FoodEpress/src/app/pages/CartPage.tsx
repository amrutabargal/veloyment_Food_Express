import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Trash2, Plus, Minus, Tag, MapPin, CreditCard, Wallet, Banknote } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    pincode: '',
  });

  const subtotal = getTotalPrice();
  const deliveryFee = subtotal > 299 ? 0 : 40;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + tax - discount;

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'FIRST50') {
      setDiscount(Math.round(subtotal * 0.5));
      toast.success('Coupon applied! 50% discount');
    } else if (couponCode.toUpperCase() === 'SAVE100') {
      setDiscount(100);
      toast.success('Coupon applied! ₹100 discount');
    } else {
      toast.error('Invalid coupon code');
    }
  };

  const handlePlaceOrder = () => {
    if (!address.street || !address.city || !address.state || !address.pincode) {
      toast.error('Please fill in delivery address');
      return;
    }
    toast.success('Order placed successfully!');
    clearCart();
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <img
              src="https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?w=400"
              alt="Empty cart"
              className="w-20 h-20 opacity-50"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#121212] mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious items to get started!</p>
          <Link to="/restaurants">
            <Button className="bg-[#E53935] hover:bg-[#C62828]">
              Browse Restaurants
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#121212] mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Items List */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="font-bold text-lg text-[#121212] mb-4">
                Order Items ({items.length})
              </h2>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 pb-4 border-b last:border-0 last:pb-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-[#121212]">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.restaurantName}</p>
                          <p className="font-semibold text-[#E53935] mt-1">₹{item.price}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center space-x-2 mt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="font-bold text-lg text-[#121212] mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-[#E53935]" />
                Delivery Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="street">Street Address</Label>
                  <Input
                    id="street"
                    placeholder="Enter street address"
                    value={address.street}
                    onChange={(e) => setAddress({ ...address, street: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="City"
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    placeholder="State"
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input
                    id="pincode"
                    placeholder="Pincode"
                    value={address.pincode}
                    onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="font-bold text-lg text-[#121212] mb-4 flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-[#E53935]" />
                Payment Method
              </h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:border-[#E53935]">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex items-center space-x-2 cursor-pointer flex-1">
                      <Wallet className="h-5 w-5 text-[#E53935]" />
                      <span>UPI (GPay, PhonePe, Paytm)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:border-[#E53935]">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center space-x-2 cursor-pointer flex-1">
                      <CreditCard className="h-5 w-5 text-[#E53935]" />
                      <span>Credit/Debit Card</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:border-[#E53935]">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex items-center space-x-2 cursor-pointer flex-1">
                      <Banknote className="h-5 w-5 text-[#E53935]" />
                      <span>Cash on Delivery</span>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="font-bold text-lg text-[#121212] mb-4">Order Summary</h2>

              {/* Coupon */}
              <div className="mb-4">
                <Label htmlFor="coupon" className="flex items-center space-x-2 mb-2">
                  <Tag className="h-4 w-4 text-[#E53935]" />
                  <span>Apply Coupon</span>
                </Label>
                <div className="flex space-x-2">
                  <Input
                    id="coupon"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button
                    variant="outline"
                    onClick={handleApplyCoupon}
                    className="whitespace-nowrap"
                  >
                    Apply
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Try: FIRST50 or SAVE100
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 py-4 border-t border-b">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (5%)</span>
                  <span className="font-semibold">₹{tax}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">Discount</span>
                    <span className="font-semibold text-green-600">-₹{discount}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between font-bold text-lg py-4">
                <span>Total</span>
                <span className="text-[#E53935]">₹{total}</span>
              </div>

              <Button
                className="w-full bg-[#E53935] hover:bg-[#C62828]"
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>

              {subtotal < 299 && (
                <p className="text-xs text-gray-500 text-center mt-3">
                  Add ₹{299 - subtotal} more for free delivery
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
