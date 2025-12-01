import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BottomNav from '../../components/BottomNav';
import '../../styles/foodPartnerDashboard.css';

export default function FoodPartnerDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/api/auth/user/me',
        { withCredentials: true }
      );

      setUser(response.data.user);
      setError(null);
    } catch (err) {
      console.error('Error fetching user data:', err);

      if (err.response?.status === 401) {
        navigate('/user/login');
        return;
      }

      setUser({
        fullName: 'Guest',
        email: 'restaurant@example.com',
        contact: '0000000000',
        address: 'Your Restaurant Address',
        profilePhoto: null,
        createdAt: new Date().toISOString(),
      });
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      console.log('user state updated:', user);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:3000/api/auth/user/logout', {
        withCredentials: true,
      });
      navigate('/');
    } catch (err) {
      console.error('Logout error:', err);
      alert('Logout failed');
    }
  };

  // optional: keep this page only for users, not partners
  const decideRedirect = async () => {
    try {
      const partnerRes = await axios.get(
        'http://localhost:3000/api/auth/food-partner/me',
        { withCredentials: true }
      );
      if (partnerRes.data?.success) {
        navigate('/food-partner/dashboard');
        return;
      }
    } catch (e) {}

    try {
      const userRes = await axios.get(
        'http://localhost:3000/api/auth/user/me',
        { withCredentials: true }
      );
      if (userRes.data?.success) {
        // already on correct page for user, no redirect
        return;
      }
    } catch (e) {}

    // not logged in as user or partner
    navigate('/user/login');
  };

  useEffect(() => {
    decideRedirect();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Your Profile</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {error && <div className="error-banner">{error}</div>}

      {/* Profile Section */}
      {user && (
        <section className="profile-section">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                <img
                  src={
                    user.profilePhoto ||
                    'https://i.pinimg.com/736x/36/80/34/3680348b64995e6c2b7f36461e1404ab.jpg'
                  }
                  alt={user.fullName || 'User'}
                />
              </div>
              <div className="profile-info">
                <h2>{user.fullName || 'User name'}</h2>
                <span className="detail-value">{user.email || 'email'}</span>
              </div>
            </div>

            <div className="profile-actions">
              <button className="btn-secondary">Edit Profile</button>
            </div>
          </div>
        </section>
      )}

      {/* Quick actions section */}
      <section className="stats-section">
        <div className="stat-card">
          <div className="stat-value">Support</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            ★ <br /> rate us
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-value">Coupons</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">Settings</div>
        </div>
      </section>
      <BottomNav/>
    </div>
  );
}
