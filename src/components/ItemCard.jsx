import './ItemCard.css'

const ItemCard = ({ product }) => {
  return (
    <div className="item-card">
      <div className="item-image-container">
        <img 
          src={product.imagePath} 
          alt={product.name} 
          className="item-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Coffee+Image'
          }}
        />
        <div className="item-category-badge">
          {product.category}
        </div>
      </div>
      
      <div className="item-content">
        <h3 className="item-name">{product.name}</h3>
        
        <div className="item-sizes">
          {product.sizes.map((size, index) => (
            <div key={index} className="size-option">
              <span className="size-label">{size}</span>
              <span className="size-price">₱{product.price[size]}</span>
            </div>
          ))}
        </div>
        
        <div className="item-actions">
          <button className="order-btn">
            <span>Order Now</span>
            <span className="btn-icon">☕</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemCard 