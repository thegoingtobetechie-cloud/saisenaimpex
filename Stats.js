
const Stats = () => {
    React.useEffect(() => {
        const counters = document.querySelectorAll('.count-up');
        const speed = 50; 
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach(counter => {
                        const updateCount = () => {
                            const target = +counter.getAttribute('data-target');
                            const count = +counter.innerText;
                            const inc = target / speed;

                            if (count < target) {
                                counter.innerText = Math.ceil(count + inc);
                                setTimeout(updateCount, 40);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        updateCount();
                    });
                    observer.disconnect(); 
                }
            });
        }, { threshold: 0.5 });
        
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }
    }, []);

    return (
        <section className="stats-section">
        <div className="stats-image"></div>
        <div className="stats-container">
            <div className="stat-box">
                <div className="stat-number"><span className="count-up" data-target="6">0</span>M</div>
                <div className="stat-label">Garments Per Year</div>
            </div>
            <div className="stat-box">
                <div className="stat-number"><span className="count-up" data-target="400">0</span>+</div>
                <div className="stat-label">Workstations</div>
            </div>
            <div className="stat-box">
                <div className="stat-number"><span className="count-up" data-target="430">0</span>+</div>
                <div className="stat-label">Employees</div>
            </div>
            <div className="stat-box">
                <div className="stat-number"><span className="count-up" data-target="8">0</span>+</div>
                <div className="stat-label">Countries Served</div>
            </div>
        </div>
    </section>
    );
};
