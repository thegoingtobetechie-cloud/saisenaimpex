const Banner = () => {
    return (
        <section className="hero">
                <div className="hero-content">
                    <img src="./assets/logo_transparent.png" alt="SSIPL Logo" style={{height: '220px', width: 'auto', objectFit: 'contain'}} />
                    <div style={{flex: '1', minWidth: '300px'}}>
                        <h1 style={{marginBottom: '10px'}}>SAI SENA IMPEX PVT LTD</h1>
                        <p style={{fontSize: '1.15rem'}}>Leading Manufacturer & Exporter of High-Quality Apparel and Textile Garments</p>
                    </div>
                </div>
            </section>
    );
};
