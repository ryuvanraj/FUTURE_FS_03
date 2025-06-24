"use client";
/* eslint-disable @next/next/no-img-element */
import { useCart } from "../context/CartContext";
import CartSummary from "./CartSummary";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter();
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="pt-24 px-4 md:px-12 flex flex-col md:flex-row gap-8 min-h-screen bg-black">
      {/* Cart Items */}
      <div style={{ flex: 2 }}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          cartItems.map(item => (
            <div key={item.id + item.size} style={{ display: "flex", alignItems: "center", marginBottom: 24, borderBottom: "1px solid #333", paddingBottom: 16 }}>
              <img src={item.image} alt={item.name} style={{ width: 100, height: 100, objectFit: "cover", marginRight: 24, borderRadius: 8 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: "bold" }}>{item.name}</div>
                <div style={{ color: "#aaa" }}>Size: {item.size}</div>
                <div style={{ color: "#aaa" }}>${item.price}</div>
                <div style={{ marginTop: 8 }}>
                  <select
                    value={item.quantity}
                    onChange={e => updateQuantity(item.id, item.size, Number(e.target.value))}
                    style={{ marginRight: 12 }}
                  >
                    {[...Array(10).keys()].map(i => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    style={{ color: "red", background: "none", border: "none", cursor: "pointer" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer"
          >
            Add More
          </button>
        )}
      </div>
      {/* Order Summary */}
      <div style={{ flex: 1, marginLeft: 32 }}>
        <CartSummary />
        <button
          className="mt-6 w-full px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;