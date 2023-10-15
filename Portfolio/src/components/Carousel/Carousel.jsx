import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../assets/img/Bienvenidos.png';
import img2 from '../../assets/img/img1.png';
import img3 from '../../assets/img/img2.png';
import img4 from '../../assets/img/img3.png';
import img5 from '../../assets/img/img4.png';
import img6 from '../../assets/img/img5.png'
import './carousel.css';


const Carousel = () => {
    const images = [img1, img2, img3, img4, img5, img6];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const selectNewImage = (index, images, next = true) => {
        const newIndex = next
            ? (index + 1) % images.length
            : (index - 1 + images.length) % images.length;
        setSelectedImage(images[newIndex]);
        setSelectedIndex(newIndex);
    };

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    };

    const next = () => {
        selectNewImage(selectedIndex, images);
    };

    // Automatizar el carrusel cada 5 segundos (5000 ms)
    useEffect(() => {
        const intervalId = setInterval(next, 5000);

        // Limpieza del intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, [selectedIndex]);

    return (
        <div className='carousel_container'>
            
            <div className='carousel_image_buttons'>
              <button className='previous_button' onClick={previous}>{'<'}</button>
                <Link to='/services'> {/* Enlace a la página de proyectos */}
                    <img src={selectedImage} alt='' className='carousel_image' />
                </Link>
             <button className='next_button' onClick={next}>{'>'}</button> 
            </div>
        </div>
    );
};

export default Carousel;
