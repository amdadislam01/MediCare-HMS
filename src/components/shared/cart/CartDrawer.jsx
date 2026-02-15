'use client';

import { X, Trash2, Plus, Minus, ShoppingBag, Package } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartDrawer() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    toggleCart,
    cartTotal,
    cartCount,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-transparent bg-opacity-50 transition-opacity duration-300"
        onClick={toggleCart}
      ></div>

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="flex-1 flex flex-col bg-white shadow-2xl transform transition-transform duration-300 ease-out">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
                <p className="text-sm text-gray-600">{cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
              </div>
            </div>
            <button
              onClick={toggleCart}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-white/50 transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="p-4 bg-gray-100 rounded-full mb-4">
                  <Package className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-sm text-gray-500 mb-6">Add some medicines to get started!</p>
                <button
                  onClick={toggleCart}
                  className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-28 h-28 border border-gray-200 rounded-lg overflow-hidden relative bg-gray-50">
                        <Image
                          src={item.image}
                          alt={item.name}
                          layout="fill"
                          objectFit="cover"
                          className="hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-gray-900 text-base leading-tight">{item.name}</h3>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-1">{item.description}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                            title="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Price and Quantity */}
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1 border border-gray-200">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1.5 hover:bg-white rounded-md transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3.5 w-3.5 text-gray-700" />
                            </button>
                            <span className="px-3 font-semibold text-sm text-gray-900 min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 hover:bg-white rounded-md transition-colors duration-200"
                            >
                              <Plus className="h-3.5 w-3.5 text-gray-700" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">৳{item.price} × {item.quantity}</p>
                            <p className="text-lg font-bold text-blue-600">৳{item.price * item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Checkout Section */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 bg-gray-50 p-6">
              {/* Subtotal */}
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Subtotal ({cartCount} items)</span>
                  <span className="text-lg font-bold text-gray-900">৳{cartTotal}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                className="w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => alert('Checkout functionality coming soon!')}
              >
                Proceed to Checkout
              </button>

              {/* Continue Shopping Link */}
              <div className="mt-4 text-center">
                <button
                  type="button"
                  className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                  onClick={toggleCart}
                >
                  ← Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
