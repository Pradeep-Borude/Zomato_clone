import '../../styles/home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Fresh mozzarella and basil',
      price: '$12.99',
      emoji: '🍕'
    },
    {
      id: 2,
      name: 'Burger Deluxe',
      description: 'Beef patty with cheese',
      price: '$10.99',
      emoji: '🍔'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Crispy greens & croutons',
      price: '$8.99',
      emoji: '🥗'
    },
    {
      id: 4,
      name: 'Biryani Rice',
      description: 'Fragrant basmati rice',
      price: '$11.99',
      emoji: '🍚'
    },
    {
      id: 5,
      name: 'Grilled Fish',
      description: 'Fresh catch of the day',
      price: '$14.99',
      emoji: '🐟'
    },
    {
      id: 6,
      name: 'Chicken Wings',
      description: 'Crispy & spicy',
      price: '$9.99',
      emoji: '🍗'
    },
    {
      id: 7,
      name: 'Pasta Carbonara',
      description: 'Creamy Italian pasta',
      price: '$11.99',
      emoji: '🍝'
    },
    {
      id: 8,
      name: 'Sushi Platter',
      description: 'Assorted fresh sushi',
      price: '$16.99',
      emoji: '🍣'
    },
    {
      id: 9,
      name: 'Tacos Al Pastor',
      description: 'Spiced pork & pineapple',
      price: '$9.99',
      emoji: '🌮'
    },
    {
      id: 10,
      name: 'Chocolate Cake',
      description: 'Rich and decadent',
      price: '$6.99',
      emoji: '🍰'
    },
    {
      id: 11,
      name: 'Coffee Espresso',
      description: 'Strong aromatic brew',
      price: '$4.99',
      emoji: '☕'
    },
    {
      id: 12,
      name: 'Smoothie Bowl',
      description: 'Refreshing fruit blend',
      price: '$7.99',
      emoji: '🥣'
    },
  ];

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
    // TODO: Add to cart logic
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Welcome to FoodView</h1>
        <p className="hero-subtitle">Discover delicious food from the best restaurants</p>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <div className="products-header">
          <h2 className="products-title">Popular Dishes</h2>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.emoji}</div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Navbar */}
      <nav className="navbar-bottom">
        <div
          className="navbar-item active"
          onClick={() => navigate('/')}
        >
          <div className="navbar-icon">🏠</div>
          <div className="navbar-label">Home</div>
        </div>

        <div
          className="navbar-item"
          onClick={() => navigate('/cart')}
        >
          <div className="navbar-icon">🛒</div>
          <div className="navbar-label">Cart</div>
          <div className="cart-badge">0</div>
        </div>

        <div
          className="navbar-item"
          onClick={() => navigate('/orders')}
        >
          <div className="navbar-icon">📦</div>
          <div className="navbar-label">Orders</div>
        </div>

        <div
          className="navbar-item"
          onClick={() => navigate('/user')}
        >
          <div className="navbar-icon">👤</div>
          <div className="navbar-label">Account</div>
        </div>
      </nav>
    </div>
  );
}