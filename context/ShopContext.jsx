"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen || isWishlistOpen || isAccountOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen, isWishlistOpen, isAccountOpen, isSearchOpen]);

  const openCart = () => {
    setIsWishlistOpen(false);
    setIsAccountOpen(false);
    setIsSearchOpen(false);
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openWishlist = () => {
    setIsCartOpen(false);
    setIsAccountOpen(false);
    setIsSearchOpen(false);
    setIsWishlistOpen(true);
  };

  const closeWishlist = () => {
    setIsWishlistOpen(false);
  };

  const openAccount = () => {
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setIsSearchOpen(false);
    setIsAccountOpen(true);
  };

  const closeAccount = () => {
    setIsAccountOpen(false);
  };

  const openSearch = () => {
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setIsAccountOpen(false);
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const addToCart = (product, material = "18k Gold Vermeil") => {
    if (!product) return;

    const rawPrice = typeof product.price === "string" 
      ? parseInt(product.price.replace(/[^0-9]/g, ""), 10) || 0
      : Number(product.price) || 0;

    const itemId = `${product.slug || product.id}-${material.toLowerCase().replace(/\s+/g, "-")}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === itemId);
      if (existingIndex > -1) {
        const nextCart = [...prevCart];
        nextCart[existingIndex] = {
          ...nextCart[existingIndex],
          quantity: nextCart[existingIndex].quantity + 1,
        };
        return nextCart;
      }
      return [
        ...prevCart,
        {
          id: itemId,
          slug: product.slug || "product",
          name: product.name,
          price: product.price,
          priceNum: rawPrice,
          image: product.image,
          material: material,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
      );
  };

  const toggleWishlist = (product) => {
    if (!product) return;
    const targetId = product.slug || product.id;
    const exists = wishlist.some((item) => (item.slug || item.id) === targetId);

    if (exists) {
      setWishlist((prev) => prev.filter((item) => (item.slug || item.id) !== targetId));
    } else {
      const rawPrice = typeof product.price === "string" 
        ? parseInt(product.price.replace(/[^0-9]/g, ""), 10) || 0
        : Number(product.price) || 0;

      setWishlist((prev) => [
        ...prev,
        {
          id: targetId,
          slug: product.slug || targetId,
          name: product.name,
          price: product.price,
          priceNum: rawPrice,
          image: product.image,
        },
      ]);
    }
  };

  const isInWishlist = (targetId) => {
    return wishlist.some((item) => (item.slug || item.id) === targetId);
  };

  const removeFromWishlist = (targetId) => {
    setWishlist((prev) => prev.filter((item) => (item.slug || item.id) !== targetId));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.priceNum * item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        isWishlistOpen,
        isAccountOpen,
        isSearchOpen,
        openCart,
        closeCart,
        openWishlist,
        closeWishlist,
        openAccount,
        closeAccount,
        openSearch,
        closeSearch,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
}
