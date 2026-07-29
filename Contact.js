const Contact = () => {
    return (
        <section id="contact" style={{backgroundColor: 'var(--light-bg)'}}>
                <div className="section-container">
                    <h2 className="section-title">Contact Us</h2>
                    <div className="contact-layout">
                        
                        {/* Left Column: Contact Info & Map */}
                        <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
                            
                            <div className="info-panel" style={{background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                                <div className="info-item">
                                    <div className="info-text">
                                        <h4>Primary Contact</h4>
                                        <p><strong>Joseph Muthaiyan</strong> (Managing Director)</p>
                                        <p>Phone: <a href="tel:+919894813801">+91-98948 13801</a></p>
                                        <p>Email: <a href="mailto:joseph@saisenaimpex.in">joseph@saisenaimpex.in</a></p>
                                    </div>
                                </div>
        
                                <div className="info-item" style={{marginTop: '20px'}}>
                                    <div className="info-text">
                                        <h4>Located Address</h4>
                                        <p>232/2b1b, Palladam Main Road,</p>
                                        <p>Kunangalpalayam Pirivu, Karaipudur,</p>
                                        <p>Palladam, Tiruppur - 641605, Tamil Nadu, India</p>
                                    </div>
                                </div>
        
                                <div className="info-item" style={{marginTop: '20px'}}>
                                    <div className="info-text">
                                        <h4>Website</h4>
                                        <p><a href="http://www.saisenaimpex.in" target="_blank">www.saisenaimpex.in</a></p>
                                    </div>
                                </div>
                            </div>
        
                            <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                                <div className="map-wrapper">
                                    <iframe 
                                        src="https://maps.google.com/maps?q=232/2b1b,%20Palladam%20Main%20Road,%20Kunangalpalayam%20Pirivu,%20Karaipudur,%20Palladam,%20Tiruppur%20-%20641605&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                        width="100%" 
                                        height="100%" 
                                        style={{border: '0'}} 
                                        allowfullscreen="" 
                                        loading="lazy">
                                    </iframe>
                                </div>
                                <a className="directions-btn" href="https://share.google/lW2diSvbH0UQ4JvCH" target="_blank">
                                    Open in Google Maps / Get Directions
                                </a>
                            </div>
                        </div>
        
                        {/* Right Column: Form (React Component) */}
                        <ContactForm />
        
                    </div>
                </div>
            </section>
    );
};
