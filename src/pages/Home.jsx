import './Home.css';
import { useRef, useState } from 'react';
import mainHome from '../assets/main-home.png';

const Home = () => {
    const carrosselRef = useRef(null);
    const [scrollAmount, setScrollAmount] = useState(0);

    const scrollStep = 220; // largura do produto + margem

    const handleScrollLeft = () => {
        const newScrollAmount = Math.max(scrollAmount - scrollStep, 0);
        setScrollAmount(newScrollAmount);
        carrosselRef.current.style.transform = `translateX(-${newScrollAmount}px)`;
    };

    const handleScrollRight = () => {
        const carrossel = carrosselRef.current;
        const maxScroll = carrossel.scrollWidth - carrossel.parentElement.offsetWidth;
        const newScrollAmount = Math.min(scrollAmount + scrollStep, maxScroll);
        setScrollAmount(newScrollAmount);
        carrossel.style.transform = `translateX(-${newScrollAmount}px)`;
    };

    return (
        <div id='page-home'>
            <div id="slide-home">
                <img style={{ width: '400px' }} src={mainHome} alt="Main" />
            </div>

            <div className="carrossel-container">
                <div className="seta esquerda" onClick={handleScrollLeft}>
                    &#10094;
                </div>
                <div className="carrossel" ref={carrosselRef}>
                    <div className="produto">
                        <img src="produto1.jpg" alt="Produto 1" />
                        <p>Produto 1</p>
                    </div>
                    <div className="produto">
                        <img src="produto2.jpg" alt="Produto 2" />
                        <p>Produto 2</p>
                    </div>
                    <div className="produto">
                        <img src="produto3.jpg" alt="Produto 3" />
                        <p>Produto 3</p>
                    </div>
                    {/* Mais produtos se quiser */}
                </div>
                <div className="seta direita" onClick={handleScrollRight}>
                    &#10095;
                </div>
            </div>
        </div>
    );
};

export default Home;
