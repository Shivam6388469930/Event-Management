import React from 'react'

const Events = () => {
    return (
        <div>
            <div className='d-flex justify-around h-96'>
                <div className='d-flex justify-center items-center w-[40%] h-full '>
                    <p className='  font-bold' style={ { fontSize: "4rem" } }>Events</p>
                </div>
                <div className='d-flex justify-center items-center w-[60%] h-full'>
                    <p className=' font-bold' style={ { fontSize: "2rem" } }>
                        Our Mantra is to create new concepts and believe in bringing them live and breathing. Our in-house event team are the working force with every individual blessed with different skill set to bring the dream concept live and giving them wheels.

                    </p>
                </div>
            </div>
            <div className='d-flex justify-center h-[70vh]'>
                <img src="services/event.jpg" alt="" srcset="" style={ { width: "100%", height: "100%" } } />
            </div>
            <div>
                <p className=' font-bold' style={ { fontSize: "1.5rem" } }>At CS Entertainment, we specialize in curating unforgettable experiences that leave a lasting impression.</p>
            </div>
            <div className='m-3'>
                <h1 className=' font-bold' style={ { fontSize: "2.5rem" } }>Here's how our ideation process works:</h1>
                <div className='d-flex flex-col justify-around'>
                    <p><span style={ { fontSize: "2rem", fontWeight: "bolder" } }>Corporate Events:</span>  From captivating conferences and high-profile product launches to engaging team-building retreats and corporate galas, our expertise in corporate event management shines through. Witness the seamless blend of professionalism and creativity in our curated corporate events.</p>

                    <p><span style={ { fontSize: "2rem", fontWeight: "bolder" } }>Weddings and Celebrations:</span> Celebrating love and joy is at the heart of what we do. Explore our collection of breathtaking weddings, milestone celebrations, and extravagant parties. Immerse yourself in the enchanting ambiance, elegant decor, and personalized touches that make each event an unforgettable affair. </p>

                    <p><span style={ { fontSize: "2rem", fontWeight: "bolder" } }>Social Gatherings:</span> Whether it's an intimate soirée or a grand social gathering, we bring people together in style. Our portfolio showcases a range of events, including cocktail receptions, themed parties, charity fundraisers, and more. Discover the vibrant atmosphere and impeccable execution that make our social events stand out. </p>

                    <p><span style={ { fontSize: "2rem", fontWeight: "bolder" } }>Concerts and Festivals:</span> The stage is set, the crowd is eager, and the music fills the air. Experience the energy and excitement of our meticulously planned concerts and festivals. From selecting top-notch performers to designing immersive experiences, we create a harmonious blend of entertainment and ambiance. </p>

                    <p><span style={ { fontSize: "2rem", fontWeight: "bolder" } }>Presentation:</span> </p>

                    <p><span style={ { fontSize: "2rem", fontWeight: "bolder" } }>Community and Non-Profit: </span> Making a positive impact is a core value of our agency. Dive into our collection of community events, charity fundraisers, and non-profit initiatives. Each event is designed to inspire, engage, and bring people together for a greater cause.

                        If you're ready to embark on your own extraordinary event, reach out to us today. Let us create a memorable experience that surpasses your expectations and sets the stage for an unforgettable celebration.</p>
                </div>
            </div>
            <div className='m-4 text-3xl font-semibold'>
                <p>Events Gallery</p>
            </div>
            <div className='flex m-14'>
                <div style={ { width: "25vw", height: "35vw", backgroundColor: "red", marginRight: "10px", borderRadius: "7%" } }>
                    <img src="photogalleyimg/23.jpeg" alt="" srcset="" className='w-full h-full' />
                </div>
                <div style={ { width: "25vw", height: "35vw", backgroundColor: "red", marginRight: "10px", marginTop: "20vh", borderRadius: "7%" } }>
                    <img src="photogalleyimg/26.jpeg" alt="" srcset="" className='w-full h-full' />
                </div>
                <div style={ { width: "25vw", height: "35vw", backgroundColor: "red", marginRight: "10px", marginTop: "10vh", borderRadius: "7%" } }>
                    <img src="photogalleyimg/40.jpeg" alt="" srcset="" className='w-full h-full' />
                </div>
                <div style={ { width: "25vw", height: "35vw", backgroundColor: "red", marginRight: "10px", marginTop: "-4vh", borderRadius: "7%" } }>
                    <img src="photogalleyimg/11.jpeg" alt="" srcset="" className='w-full h-full' />
                </div>
                <div style={ { width: "25vw", height: "35vw", backgroundColor: "red", marginRight: "10px", marginTop: "5vh", borderRadius: "7%" } }>
                    <img src="photogalleyimg/12.jpeg" alt="" srcset="" className='w-full h-full' />
                </div>


            </div>
        </div>
    )
}

export default Events;
