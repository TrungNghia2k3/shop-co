import { useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "/assets/images/products/product-1.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "/assets/images/products/product-2.png",
    },
    {
      id: 3,
      name: "T-Shirt with Tape Details",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "/assets/images/products/product-3.png",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  // Cart calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountRate = 0.2; // 20% discount
  const discount = subtotal * discountRate;
  const deliveryFee = 15;
  const total = subtotal === 0 ? 0 : subtotal - discount + deliveryFee;

  // Cart actions
  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    // Handle promo code logic here
    console.log("Applying promo code:", promoCode);
    // You could implement actual promo code validation here
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addItem = (item) => {
    const existingItem = cartItems.find((cartItem) => 
      cartItem.id === item.id && 
      cartItem.size === item.size && 
      cartItem.color === item.color
    );

    if (existingItem) {
      updateQuantity(existingItem.id, item.quantity);
    } else {
      setCartItems((items) => [...items, { ...item, id: Date.now() }]);
    }
  };

  // Cart summary data
  const cartSummary = {
    subtotal,
    discount,
    deliveryFee,
    total,
    itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    discountPercentage: Math.round(discountRate * 100),
  };

  return {
    // State
    cartItems,
    promoCode,
    setPromoCode,
    
    // Computed values
    cartSummary,
    
    // Actions
    updateQuantity,
    removeItem,
    applyPromoCode,
    clearCart,
    addItem,
  };
};

export default useCart;
