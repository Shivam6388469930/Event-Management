import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Hero_img from './Photo/Hero_img';

const Hero = () => {
    const images = Hero_img() || [];

    const items = images.map((item) => 
        item.type === "image" ? (
            <img
                key={item.source}
                src={item.source}
                
                style={{ width: "100%", height: "auto", maxHeight: "90vh" }}
            />
        ) : (
            <video
                key={item.source}
                src={item.source}

                autoPlay
                muted
                loop
                style={{ width: "100%", height: "auto", maxHeight: "90vh" }}
            />
        )
    );

    return (
        <div className=" bg-black" style={{width:'100%'}}>
            <AliceCarousel
                autoPlay
                autoPlayInterval={1800}
                infinite
                disableButtonsControls
                items={items}
            />
        </div>
    );
};

export default Hero;
