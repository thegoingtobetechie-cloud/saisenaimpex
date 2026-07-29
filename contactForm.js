const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = React.useState(false);
    const formRef = React.useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(formRef.current);

        try {
            const response = await fetch("https://formsubmit.co/ajax/joseph@saisenaimpex.in", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitting(false);
                setShowSuccessPopup(true);
                formRef.current.reset();
                
                // Hide popup after 5 seconds
                setTimeout(() => {
                    setShowSuccessPopup(false);
                }, 5000);
            } else {
                alert("Oops! Something went wrong. Please try again.");
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error(error);
            alert("Oops! Something went wrong. Please check your connection and try again.");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-form-container" style={{ position: 'relative' }}>
            
            {/* Loading Overlay */}
            {isSubmitting && (
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(255,255,255,0.8)', zIndex: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '12px'
                }}>
                    <div style={{
                        background: 'var(--primary-color)', color: 'white',
                        padding: '15px 30px', borderRadius: '8px', fontWeight: 'bold',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                    }}>
                        Sending...
                    </div>
                </div>
            )}

            {/* Success Popup */}
            {showSuccessPopup && (
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(255,255,255,0.95)', zIndex: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '12px', textAlign: 'center', padding: '20px'
                }}>
                    <div>
                        <div style={{ fontSize: '3rem', color: '#28a745', marginBottom: '15px' }}>✓</div>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Mail Sent Successfully!</h3>
                        <p style={{ color: '#555', fontSize: '1.1rem' }}>We will contact you back shortly.</p>
                    </div>
                </div>
            )}

            <h3>Send Us a Note</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
                {/* FormSubmit Configuration Fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New message from Sai Sena Impex website!" />

                <div className="form-group">
                    <input type="text" name="Name" className="form-control" placeholder="Name" required />
                </div>
                <div className="form-group">
                    <input type="email" name="Email" className="form-control" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <input type="tel" name="Mobile" className="form-control" placeholder="Mobile" required />
                </div>
                <div className="form-group">
                    <input type="text" name="Company" className="form-control" placeholder="Company" />
                </div>

                <div className="checkbox-group-title">Products interested</div>
                <div className="checkbox-grid">
                    <label className="checkbox-label">
                        <input type="checkbox" name="Product_Yarn" value="Yes" /> Yarn
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" name="Product_Fabric" value="Yes" /> Fabric
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" name="Product_Knitted" value="Yes" /> Knitted garments
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" name="Product_Woven" value="Yes" /> Woven garments
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" name="Product_Workwear" value="Yes" /> Work wear
                    </label>
                </div>

                <div className="form-group">
                    <textarea name="Message" className="form-control" rows="4" placeholder="Message" required></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};
