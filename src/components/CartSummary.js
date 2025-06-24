"use client";
import { useCart } from "../context/CartContext";

const CartSummary = () => {
  const { cartItems, cartSubtotal, shipping, estimatedTax, cartTotal } = useCart();

  return (
    <div className="bg-white/10 rounded-xl p-6 shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4 text-white">Order Summary</h2>
      <div className="divide-y divide-gray-700">
        {cartItems.map(item => (
          <div key={item.id + item.size} className="flex items-center justify-between py-3">
            <div>
              <div className="font-semibold text-white">{item.name}</div>
              <div className="text-xs text-gray-400">Size {item.size}</div>
              <div className="text-xs text-gray-400">Qty: {item.quantity}</div>
            </div>
            <div className="text-white font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-1 text-sm text-gray-300">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${cartSubtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span>${estimatedTax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-white border-t border-gray-700 pt-2 mt-2">
          <span>Total</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
