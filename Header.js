const Header = () => {
    return (
        <header>
                <div className="nav-container">
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                        <img src="./assets/logo_transparent.png" alt="Sai Sena Impex Logo" style={{height: '45px', width: 'auto'}} />
                        <div className="logo-text">SAI SENA IMPEX PVT LTD</div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#mission">Mission & Vision</a></li>
                            <li><a href="#sustainability">Sustainability</a></li>
                            <li><a href="#products">Our Products</a></li>
                            <li><a href="#brands">Brands</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
    );
};
