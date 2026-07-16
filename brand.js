// Add your exact logo URLs and brand names here
const BRANDS = [
    { name: "Brand 1", logo: "./assets/brand1.png" },
    { name: "Brand 2", logo: "./assets/brand2.png" },
    { name: "Brand 3", logo: "./assets/brand3.png" },
    { name: "Brand 4", logo: "./assets/brand4.png" },
    { name: "Brand 5", logo: "./assets/brand5.png" },
    { name: "Brand 6", logo: "./assets/brand6.png" },
    { name: "Brand 7", logo: "./assets/brand7.png" },
    // Add as many brands as you need
];

function initBrandsMarquee() {
    const track = document.getElementById('brands-track');
    if (!track) return;

    track.innerHTML = ''; // Clear out any fallback HTML

    // Function to generate a set of logos
    const createLogoSet = () => {
        const fragment = document.createDocumentFragment();
        BRANDS.forEach(brand => {
            const div = document.createElement('div');
            div.className = 'brand-item';
            
            const img = document.createElement('img');
            img.src = brand.logo;
            img.alt = brand.name;
            
            div.appendChild(img);
            fragment.appendChild(div);
        });
        return fragment;
    };

    // To create a perfect seamless infinite scroll, we must inject TWO identical sets of logos.
    // The CSS animation will slide them exactly 50% to the left, then instantly snap back to 0.
    track.appendChild(createLogoSet());
    track.appendChild(createLogoSet());
}

// Run the script when the page loads
document.addEventListener('DOMContentLoaded', initBrandsMarquee);