import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <div className="container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            We'd love to hear from you! Get in touch with us.
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Visit us for a perfect cup of coffee or reach out through any of our channels. 
                We're here to serve you the best coffee experience.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h3>Phone</h3>
                    <p>+63 912 345 6789</p>
                    <p>+63 998 765 4321</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h3>Location</h3>
                    <p>123 Coffee Street</p>
                    <p>Makati City, Metro Manila</p>
                    <p>Philippines 1200</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📱</div>
                  <div className="method-content">
                    <h3>Social Media</h3>
                    <a 
                      href="https://facebook.com/brewandbean" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      Facebook: @brewandbean
                    </a>
                    <a 
                      href="https://instagram.com/brewandbean" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      Instagram: @brewandbean
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">🕒</div>
                  <div className="method-content">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 8:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-map">
              <div className="map-container">
                <div className="map-placeholder">
                  <div className="map-icon">🗺️</div>
                  <h3>Our Location</h3>
                  <p>123 Coffee Street, Makati City</p>
                  <p>Metro Manila, Philippines</p>
                  <button className="directions-btn">
                    <span>Get Directions</span>
                    <span className="btn-icon">🚗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-content">
              <h2>Ready to Visit?</h2>
              <p>Come experience the perfect cup of coffee in a cozy atmosphere</p>
              <div className="cta-buttons">
                <a 
                  href="https://facebook.com/brewandbean" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-button facebook"
                >
                  <span>Follow us on Facebook</span>
                  <span className="btn-icon">📘</span>
                </a>
                <a href="tel:+639123456789" className="cta-button phone">
                  <span>Call Us Now</span>
                  <span className="btn-icon">📞</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 