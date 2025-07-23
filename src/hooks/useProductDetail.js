import { useState } from "react";

const useProductDetail = () => {
  // State management
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(2); // Large is default
  const [quantity, setQuantity] = useState(1);

  // Product data
  const productImages = [
    "/assets/images/product-detail/sub-1.png",
    "/assets/images/product-detail/sub-2.png",
    "/assets/images/product-detail/sub-3.png",
  ];

  const colors = [
    { name: "Olive", class: "color-olive", bg: "#6b7c32" },
    { name: "Green", class: "color-green", bg: "#2d5a27" },
    { name: "Navy", class: "color-navy", bg: "#2c3e50" },
  ];

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  // Product information
  const productInfo = {
    title: "ONE LIFE GRAPHIC SHIRT",
    price: 260,
    originalPrice: 300,
    discount: 40,
    rating: 4.5,
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  };

  // Event handlers
  const handleImageChange = (index) => {
    setSelectedImage(index);
  };

  const handleColorSelect = (index) => {
    setSelectedColor(index);
  };

  const handleSizeSelect = (index) => {
    setSelectedSize(index);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    const productData = {
      title: productInfo.title,
      price: productInfo.price,
      color: colors[selectedColor].name,
      size: sizes[selectedSize],
      quantity: quantity,
      image: productImages[selectedImage],
    };
    console.log("Add to cart:", productData);
    // Here you would typically dispatch to a cart context or call an API
    return productData;
  };

  // Computed values
  const selectedImageSrc = productImages[selectedImage];
  const selectedColorData = colors[selectedColor];
  const selectedSizeData = sizes[selectedSize];

  return {
    // State
    selectedImage,
    selectedColor,
    selectedSize,
    quantity,
    
    // Data
    productImages,
    colors,
    sizes,
    productInfo,
    
    // Computed values
    selectedImageSrc,
    selectedColorData,
    selectedSizeData,
    
    // Handlers
    handleImageChange,
    handleColorSelect,
    handleSizeSelect,
    increaseQuantity,
    decreaseQuantity,
    handleQuantityChange,
    handleAddToCart,
  };
};

export default useProductDetail;
