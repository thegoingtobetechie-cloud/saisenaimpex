const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <h3>Send Us a Note</h3>
            <form action="https://formsubmit.co/joseph@saisenaimpex.in" method="POST">
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

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    );
};

// Render the component into the DOM
const rootNode = document.getElementById('react-contact-root');
if (rootNode) {
    const root = ReactDOM.createRoot(rootNode);
    root.render(<ContactForm />);
}
