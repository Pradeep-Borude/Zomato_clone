import '../../styles/home.css';
import { useNavigate } from 'react-router-dom';

export default function Orders() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">📦 Your Orders</h1>
        <p className="hero-subtitle">Track and manage your orders</p>
      </div>

      <div className="products-section">
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 20px',
          color: 'var(--text-secondary)'
        }}>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>No orders yet</p>
          <button 
            onClick={() => navigate('/')}
            className="add-to-cart-btn"
            style={{ padding: '10px 20px' }}
          >
            Start Ordering
          </button>
        </div>
      </div>

      {/* Sticky Bottom Navbar */}
      <nav className="navbar-bottom">
        <div className="navbar-item" onClick={() => navigate('/')}>
          <div className="navbar-icon">🏠</div>
          <div className="navbar-label">Home</div>
        </div>

        <div className="navbar-item" onClick={() => navigate('/cart')}>
          <div className="navbar-icon">🛒</div>
          <div className="navbar-label">Cart</div>
          <div className="cart-badge">0</div>
        </div>

        <div className="navbar-item active" onClick={() => navigate('/orders')}>
          <div className="navbar-icon">📦</div>
          <div className="navbar-label">Orders</div>
        </div>

        <div className="navbar-item" onClick={() => navigate('/user')}>
          <div className="navbar-icon">👤</div>
          <div className="navbar-label">Account</div>
        </div>
      </nav>
    </div>
  );
}
