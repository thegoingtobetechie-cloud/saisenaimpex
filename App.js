const App = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Stats />
            <About />
            <MdNote />
            <Mission />
            <Sustainability />
            
            {/* The Products section logic expects an empty div with id="react-products-root" 
                Since products.js is independent, we just provide the container */}
            <section id="products" style={{paddingTop: '80px', paddingBottom: '80px'}}>
                <h2 className="section-title">Our Products</h2>
                <div id="react-products-root"></div>
            </section>

            <Brands />
            <Certs />
            <Contact />
            <Footer />
        </div>
    );
};

const rootNode = document.getElementById('root');
if (rootNode) {
    const root = ReactDOM.createRoot(rootNode);
    root.render(<App />);
}
