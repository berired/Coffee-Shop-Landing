import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Brew & Bean</span>
          </h1>
          <p className="hero-subtitle">
            Where every cup tells a story, and every sip brings comfort
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="cta-button primary">
              Explore Our Menu
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Visit Us
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="coffee-cup">☕</div>
        </div>
      </div>

      <div className="about-section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                At <strong>Brew & Bean</strong>, we believe that great coffee is more than just a beverage—it's an experience. 
                Our journey began with a simple passion for creating the perfect cup of coffee, crafted with care and served with warmth.
              </p>
              <p>
                We source the finest beans from around the world, roast them to perfection, and brew each cup with precision. 
                Whether you're a coffee connoisseur or just starting your coffee journey, we have something special for everyone.
              </p>
              <div className="features">
                <div className="feature">
                  <span className="feature-icon">🌱</span>
                  <h3>Fresh Beans</h3>
                  <p>Premium quality beans sourced globally</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">🔥</span>
                  <h3>Expert Roasting</h3>
                  <p>Perfectly roasted for optimal flavor</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">💝</span>
                  <h3>Made with Love</h3>
                  <p>Every cup crafted with passion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Ready to Experience Great Coffee?</h2>
          <p>Join us for a cup of perfection</p>
          <Link to="/menu" className="cta-button primary large">
            View Our Menu
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home 