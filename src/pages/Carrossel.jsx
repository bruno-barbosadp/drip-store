import { useEffect, useRef, useState } from "react"
import mainHome from "../assets/main-home.png"
import ornamentSlide from "../assets/ornament-slide.png"
import "./Carrossel.css"

const slides = [
    {
        text: "Melhores ofertas personalizadas",
        title: "Queima de estoque Nike 🔥",
        description: "Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod nure consectetur.",
        image: mainHome,
        buttonText: "Ver ofertas"
    },
    {
        text: "Novidades imperdíveis",
        title: "Coleção Air Jordan 2025 🏃",
        description: "Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod nure consectetur.",
        image: mainHome,
        buttonText: "Ver coleção"
    },
    {
        text: "Edição limitada",
        title: "Sinal Vermelho Nike SB 🔴",
        description: "Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod nure consectetur.",
        image: mainHome,
        buttonText: "Comprar agora"
    },
    {
        text: "Tecnologia avançada",
        title: "Promoção de Headphone 🎧",
        description: "Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod nure consectetur.",
        image: mainHome,
        buttonText: "Ver promoção"
    }
]

function Carrossel(){
    const [currentSlide, setCurrentSlide] = useState(0)
    const intervalRef = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, [])

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 3000)
    }

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current)
    }

    return (
    <section className="carousel-section">
        <div 
            className="carousel-container"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            <div className="carousel-wrapper">
                {slides.map((slide, index) => (
                    <div 
                          key={index}
                          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        
                        <div className="slide-content">
                            <h4>{slide.text}</h4>
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
                            <button className="primary-button">{slide.buttonText}</button>
                        </div>
                        <div className="slide-image">
                            <img src={slide.image} alt={slide.title} />
                        </div>
                    </div>
                ))}
            </div>

             <div className="carousel-controls">
                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
)
}



export default Carrossel