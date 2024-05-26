import React from 'react';
import './Slide.css';

const Slide = ({ image, link }) => {
    return (
        <div className='slide-section'>
            <img src={image} alt='Post' />
            <a href={link} className='bottom__ancora' target='_blank' rel='noopener noreferrer'>Saiba mais</a>
        </div>
    );
}

export default Slide;