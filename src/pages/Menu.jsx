import { useState } from 'react'
import ItemCard from '../components/ItemCard'
import './Menu.css'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: "Classic Americano",
      sizes: ["12oz", "16oz"],
      price: { "12oz": 59, "16oz": 69 },
      category: "coffee-based",
      imagePath: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Cappuccino",
      sizes: ["12oz", "16oz"],
      price: { "12oz": 79, "16oz": 89 },
      category: "coffee-based",
      imagePath: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Latte",
      sizes: ["12oz", "16oz"],
      price: { "12oz": 89, "16oz": 99 },
      category: "coffee-based",
      imagePath: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Espresso",
      sizes: ["12oz", "16oz"],
      price: { "12oz": 49, "16oz": 59 },
      category: "coffee-based",
      imagePath: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Mocha",
      sizes: ["12oz", "16oz"],
      price: { "12oz": 99, "16oz": 109 },
      category: "coffee-based",
      imagePath: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Hot Chocolate",
      sizes: ["12oz", "16oz"],
      price: { "12oz": 69, "16oz": 79 },
      category: "non-coffee",
      imagePath: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Chai Tea Latte",
      sizes: ["12oz", "16oz"],
      price: { "12oz": 79, "16oz": 89 },
      category: "non-coffee",
      imagePath: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Green Tea",
      sizes: ["12oz", "16oz"],
      price: { "12oz": 59, "16oz": 69 },
      category: "non-coffee",
      imagePath: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      id: 9,
      name: "Classic Matcha Latte",
      sizes: ["12oz", "16oz"],
      price: { "12oz": 89, "16oz": 99 },
      category: "matcha-based",
      imagePath: "https://images.unsplash.com/photo-1515823662972-94d5d1c4b1c4?w=400&h=300&fit=crop"
    },
    {
      id: 10,
      name: "Matcha Frappuccino",
      sizes: ["12oz", "16oz"],
      price: { "12oz": 109, "16oz": 119 },
      category: "matcha-based",
      imagePath: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: 11,
      name: "Matcha Espresso",
      sizes: ["12oz", "16oz"],
      price: { "12oz": 99, "16oz": 109 },
      category: "matcha-based",
      imagePath: "https://images.unsplash.com/photo-1515823662972-94d5d1c4b1c4?w=400&h=300&fit=crop"
    },
    {
      id: 12,
      name: "Vanilla Matcha",
      sizes: ["12oz", "16oz"],
      price: { "12oz": 99, "16oz": 109 },
      category: "matcha-based",
      imagePath: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', icon: '☕' },
    { id: 'coffee-based', name: 'Coffee', icon: '☕' },
    { id: 'non-coffee', name: 'Non-Coffee', icon: '🫖' },
    { id: 'matcha-based', name: 'Matcha', icon: '🍵' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="menu">
      <div className="menu-header">
        <div className="container">
          <h1 className="menu-title">Our Menu</h1>
          <p className="menu-subtitle">
            Discover our carefully crafted selection of beverages
          </p>
        </div>
      </div>

      <div className="menu-content">
        <div className="container">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <ItemCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <div className="no-products-icon">☕</div>
              <h3>No products found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Menu 