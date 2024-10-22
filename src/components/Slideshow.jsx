import React, { useState, useEffect } from 'react';
import { SlideshowStyle } from "../css/SlideshowStyle";
import slide1 from '../assets/tracks/gp-berlim.webp';
import slide2 from '../assets/tracks/gp-monaco.webp';
import slide3 from '../assets/tracks/gp-sao-paulo.webp';
import slide4 from '../assets/tracks/gp-uer.webp';

const slides = [slide1, slide2, slide3, slide4];

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <SlideshowStyle>
            <section id='secao1' className="secao1">
                <h3>Inserir as pessoas no mundo da formula-E!</h3>
                <div className="slideshow">
                    <div className='slideImage'>
                        {slides.map((url, index) => (
                            <img
                            key={url}
                            src={url}
                            style={{ transform: `translateX(${-100 * currentIndex}%)`, transition: 'transform 2s ease' }}
                            />
                        ))}
                    </div>
                </div>
                
                
            </section>
        </SlideshowStyle>
    );
}

export default Slideshow;
