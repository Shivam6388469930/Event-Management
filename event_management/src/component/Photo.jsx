import React from 'react';
import Eventcard from './Eventcard';
import CARD from './Data';
import AliceCarousel from 'react-alice-carousel';
import {Link}from 'react-router-dom'

const Photo = () => {
  const responsive = {
    0: { items: 1 },
    340: { items: 1.2 },
    450: { items: 1.5 },
    600: { items: 1.8 },
    720: { items: 2.2 },
    1024: { items: 4.5 },
  };

  // Ensure CARD is valid and map data safely
  const carouselItems = Array.isArray(CARD)
    ? CARD.map((item, index) => <Eventcard key={index} imagesrc={item.imageUrl} />)
    : [];

  const renderCarousel = (title) => (
    <div className="container my-6">
      <h1 className="text font-bold my-3 text-3xl">{title}</h1>
      <AliceCarousel
        className="flex justify-center items-center"
        mouseTracking
        disableButtonsControls
        items={carouselItems}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );

  return (
    <div>
       <div
                className="w-full mb-3  text-white "
                style={ {
                    height: "50vh",
                    backgroundImage: `url('image/Carousel_at_Hyde_Park.jpg')`,
                    backgroundSize: "cover", // Optional: Ensures the image covers the div
                    backgroundPosition: "center", // Optional: Centers the image
                } }
            >
                <div className='d-flex flex-col justify-center items-center h-full'>
                 <p className='text-4xl font-bold font-serif '> Photo Gallery</p>
                 <p className='text-xl font-bold font-serif  '>This event are manage and organized by our profesional teams.</p>


                </div>
            </div>
      <div className="lg:col-span-3 " >
        <div className="row  w-full">
          <div className="flex flex-wrap mb-2 justify-center">
            {carouselItems.length > 0 ? (
              carouselItems
            ) : (
              <p>No items available to display.</p>
            )}
          </div>
        </div>
      </div>
      {carouselItems.length > 0 && renderCarousel('Birthday Decoration')}
      {carouselItems.length > 0 && renderCarousel('Wedding Decoration')}
      {carouselItems.length > 0 && renderCarousel('Anniversary Decoration')}
      <div>
            <p className='font-bold font-serif  ' style={{fontSize:"4rem"}}>Evalute Your Events:</p>
            <p className=' font-bold font-serif  ' style={{fontSize:"4rem"}}> Trust our Professional team</p>
            <p>The <span className='text-red-500'>Eventkiya </span> is not only manage your events.It also generate a memorable moment in your life.</p>
            </div>
            <button className='m-3 ' style={{ width:"30vw", height:"3rem",  fontSize:"2rem" ,border:"3px solid black",borderRadius:"12px" }}><Link className='d-flex justify-center items-center' aria-disabled="true" to="/contact">Contact</Link></button>
    </div>
  );
};

export default Photo;
