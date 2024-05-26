import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carrossel.css';
import Slide from '../Slide';

const slidesData = [
    { image: '/img/Instagram/post1.svg', link: 'https://www.instagram.com/p/Ct3qXpduZ0r/?img_index=1' },
    { image: '/img/Instagram/post2.svg', link: 'https://www.instagram.com/p/CuEl-eGOyGk/?img_index=1' },
    { image: '/img/Instagram/post3.svg', link: 'https://www.instagram.com/p/Ct1OicvOOaT/?img_index=1' },
    { image: '/img/Instagram/post4.svg', link: 'https://www.instagram.com/p/Cw8Mt3ArU_Y/?img_index=1' },
    { image: '/img/Instagram/post5.svg', link: 'https://www.instagram.com/p/CsFBPYarhvm/?img_index=1' },
    { image: '/img/Instagram/post6.svg', link: 'https://www.instagram.com/p/CqnQKAnORqQ/' },
    { image: '/img/Instagram/post7.svg', link: 'https://www.instagram.com/p/Cp3j-tiLO84/?img_index=1' },
    { image: '/img/Instagram/post8.svg', link: 'https://www.instagram.com/p/CqtulLYr34r/' },
    { image: '/img/Instagram/post9.svg', link: 'https://www.instagram.com/p/Ct9-KHtukjf/?img_index=1' },
    { image: '/img/Instagram/post10.svg', link: 'https://www.instagram.com/p/Cwp3PcmLKsH/' },
    { image: '/img/Instagram/post11.svg', link: 'https://www.instagram.com/p/CwnbaTCrDjz/' }
];

const Carrossel = () => {
    return (
        <div id="noticias" className='carrossel'>
            <h2>Saiba dos seus direitos!</h2>
            <div className='carrossel-swiper'>
                    <h5 className='carrossel-aviso'>Arraste para o lado!</h5>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Slide image={slide.image} link={slide.link} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Carrossel;