# 🛍️ SHOP.CO (E-commerce Frontend)

A modern, responsive e-commerce web application built with React, featuring a complete shopping experience with advanced filtering, sorting, and mobile-optimized design.

---

## ✨ Key Features
- **Product Browsing**: Browse 15+ products across multiple categories with responsive grid layout
- **Advanced Filtering**: Filter by categories, colors, sizes, styles, and price range with real-time updates
- **Smart Sorting**: Sort products by popularity, price (low/high), newest items, and customer ratings
- **Mobile-First Design**: Fully responsive with mobile filter overlays and optimized pagination
- **Shopping Cart**: Add, remove, and manage cart items with quantity controls and price calculations
- **Custom Hooks Architecture**: Clean separation of logic and UI using custom React hooks
- **Product Details**: Comprehensive product pages with size/color selection and customer reviews

---

## 🛠️ Tech Stack
- **Framework:** React 18
- **Styling:** CSS3, Bootstrap 5.3.6, Bootstrap Icons 1.13.1
- **Routing:** React Router 7.6.2
- **State Management:** React Hooks (useState, useEffect, useCallback)
- **Performance:** Web Vitals 2.1.4
- **Architecture:** Custom hooks pattern for business logic separation

---

## 📁 Project Structure Highlights
- `pages/`: Main application pages (HomePage, CategoryPage, ProductDetailPage, ShoppingCart)
- `sections/`: Major UI sections (Header, Footer, Hero, ProductListing, FilterPanel, Cart)
- `components/`: Reusable UI components (Breadcrumb, PriceRangeFilter)
- `hooks/`: Custom hooks for business logic (useProductListing, useCart, useFilterPanel, useHeader, useProductDetail)
- `assets/`: Static data (15 products with categories, colors, sizes, pricing)
- `routes/`: Application routing configuration

---

## 🎯 Purpose
This project demonstrates:
- **Modern React Patterns**: Custom hooks architecture for clean code separation
- **Responsive E-commerce UI**: Mobile-first design with Bootstrap integration
- **Advanced Filtering System**: Multi-criteria product filtering with real-time updates
- **State Management**: Complex state handling without external libraries
- **Component Reusability**: Modular design with reusable components
- **User Experience**: Smooth interactions, pagination, and mobile optimizations

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/TrungNghia2k3/shop-co.git

# Navigate to project directory
cd shop-co

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:3000`

---

## 📱 Features Overview

### Product Catalog
- **15 Products** across 8 categories (T-Shirts, Jeans, Shirts, Shorts, Polo, Jackets, Pants, Hoodies)
- **Price Range**: $80 - $320 with discount indicators
- **Product Attributes**: Colors, sizes, brands, styles, ratings

### Filtering & Sorting
- **Category Filter**: Multi-select product categories
- **Price Range**: Dual-slider for price filtering ($80-$320)
- **Color Filter**: Visual color picker with 15+ colors
- **Size Filter**: Small to 4X-Large size options
- **Style Filter**: Casual, Formal, Sports, Smart Casual
- **Sort Options**: Most Popular, Price (Low/High), Newest, Customer Rating

### Responsive Design
- **Desktop**: 3 products per row with full filter panel
- **Tablet**: 2 products per row with adapted layout
- **Mobile**: 2 products per row with overlay filters and condensed pagination

---

## 🏗️ Architecture

### Custom Hooks
- `useProductListing`: Handles product filtering, sorting, and pagination
- `useCart`: Manages shopping cart state and calculations
- `useFilterPanel`: Controls filter selections and active filter counts
- `useHeader`: Manages navigation and mobile menu states
- `useProductDetail`: Handles product selection and cart integration

### Key Components
- **ProductListing**: Main product grid with sorting and pagination
- **FilterPanel**: Advanced filtering interface with multiple criteria
- **Cart**: Shopping cart with quantity management and price calculations
- **Header**: Responsive navigation with mobile menu overlay
- **PriceRangeFilter**: Dual-slider price range component

---

## 🌐 Live Demo
Visit the live website: [Website](https://shop-co-fawn-zeta.vercel.app/)

---

## 📄 License
Project for educational purposes only

---

## 🎨 Design Credits
Based on Figma design: [E-commerce Website Template](https://www.figma.com/design/5cBebXu5KZxPNiypbft2fO/E-commerce-Website-Template--Freebie---Community-?node-id=0-1&t=iqdqHTu4RfLHCWuu-0)