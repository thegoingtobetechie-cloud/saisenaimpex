const BRANDS = [
    { name: "Brand 1", logo: "./assets/urbanmonkey.png" },
    { name: "Brand 2", logo: "./assets/beinghuman.png" },
    { name: "Brand 3", logo: "./assets/sistersandseekers.png" },
    { name: "Brand 4", logo: "./assets/reasn.png" },
    { name: "Brand 5", logo: "./assets/planb.png" },
    { name: "Brand 6", logo: "./assets/navira.png" },
];

const Brands = () => {
    return (
        <section id="brands" className="brands-section">
            <h2 className="section-title">Brands We Work With</h2>
            <div className="brands-marquee-container">
                <div id="brands-track" className="brands-track">
                    {/* First set */}
                    {BRANDS.map((brand, idx) => (
                        <div className="brand-item" key={`set1-${idx}`}>
                            <img src={brand.logo} alt={brand.name} />
                        </div>
                    ))}
                    {/* Second set for infinite loop */}
                    {BRANDS.map((brand, idx) => (
                        <div className="brand-item" key={`set2-${idx}`}>
                            <img src={brand.logo} alt={brand.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
