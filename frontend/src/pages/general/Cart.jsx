import '../../styles/home.css';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">🛒 Your Cart</h1>
        <p className="hero-subtitle">Review and manage your items</p>
      </div>

      <div className="products-section">
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 20px',
          color: 'var(--text-secondary)'
        }}>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>Your cart is empty</p>
          <button 
            onClick={() => navigate('/')}
            className="add-to-cart-btn"
            style={{ padding: '10px 20px' }}
          >
            Continue Shopping
          </button>
        </div>
      </div>

      {/* Sticky Bottom Navbar */}
           <BottomNav/>
     
    </div>
  );
}
