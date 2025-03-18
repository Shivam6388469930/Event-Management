import React from 'react'

const About = () => {
    return (
        <div className='pt-16'>
            <div
                className="w-100 mb-3"
                style={ {
                    height: "50vh",
                    backgroundImage: `url('image/contactimg.png')`,
                    backgroundSize: "cover", // Optional: Ensevent_management/public/image/contactimg.pngures the image covers the div
                    backgroundPosition: "center", // Optional: Centers the image
                } }
            >
                <div className='d-flex flex-col justify-center items-center h-full'>
                    <p className='text-4xl font-bold font-serif text-red-600 '>ABOUT US</p>
                    <p className='text-4xl font-bold font-serif  text-orange-400'>Elevating Events</p>
                    <p className='text-4xl font-bold font-serif text-orange-400  '>Enchanting Experience.</p>


                </div>

            </div>
            <div className='flex justify-center flex-col'>
                <p className='text-2xl font-bold font-serif m-2 ' style={ { fontSize: "3rem" } }>We Are Event <span className='text-orange-500'> <u>Management Angency</u></span></p>
                <p className='text-2xl font-bold font-serif m-2 mb-5 ' style={ { fontSize: "3rem" } }>For Manage Your Events.</p>
                <p className='mb-3' style={ { fontSize: "1.3rem" } }>We work with a diverse range of companies from small to medium sized business for their Brand Building. From our Bangalore office and Pan India Networks we serviced to clients throughout India for over 6 years. From ideation to execution for Brand Building! We care of all.</p>

            </div>
            <div className='flex mt-5'>
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
            <div className='flex m-5 flex-col md:flex-row '>
                <div className=' flex justify-start w-[100%] h-[10vh] md:h-[60vh] md:w-[40%]'>
                    <h4 class="heading-title text-6xl font-bold font-serif m-2 mb-0 md:mb-4"> Our Team Rules</h4>
                </div  >
                <div className='  w-[100%] h-auto md:h-[70vh] md:w-[60%]'>
                    <h1 class="title text-5xl font-bold font-serif p-0 md:p-5">Harmony in Creativity, Precision in Execution</h1>
                    <div className='flex h-[100%] flex-col md:flex-row m-5'>
                        <div className=' w-[100%] h-auto md:h-[60vh] md:w-[50%] m-3 flex flex-col justify-start'>
                            <p class="desc text-3xl font-bold font-serif">Team Rule  (No.01)</p>
                            <h2 class="sub-title text-2xl font-bold font-serif">Love what de do</h2>
                            <p className='text-xl  font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, at ullam? A voluptatem aperiam laborum, voluptatibus vitae provident expedita ipsam dolorem, odio vel nam quaerat ex quasi ab quisquam sequi.</p>

                        </div>
                        <div className=' w-[100%] h-auto md:h-[60vh] md:w-[50%] m-3 flex flex-col justify-start'>
                            <p class="desc text-3xl font-bold font-serif">Team Rule  (No.02)</p>
                            <h2 class="sub-title text-2xl font-bold font-serif">Trust</h2>
                            <p className='text-xl  font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore deleniti, magnam maiores autem maxime numquam laboriosam similique alias adipisci dolore dolores dignissimos, expedita a itaque laudantium praesentium voluptate porro!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' felx justify-center'>
                <p className='text-red-400 font-bold text-2xl' >Welcome</p>
                <p>eventKiya Is A professionally Managed Event</p>
            </div>
            <div className="lg:col-span-3">

                <div className="container">
                    <div className=" flex flex-wrap mb-2 justify-center">
                        <div className='w-72 h-16 border-r-gray-400 border-2 border-solid border-b-gray-400 flex justify-center items-center m-6 text-red-500 font-semibold'>Birthday</div>
                        <div className='w-72 h-16 border-r-gray-400 border-2 border-solid border-b-gray-400 flex justify-center items-center m-6 text-red-500 font-semibold'>Sangeet</div>
                        <div className='w-72 h-16 border-r-gray-400 border-2 border-solid border-b-gray-400 flex justify-center items-center m-6 text-red-500 font-semibold'>Weddings</div>
                        <div className='w-72 h-16 border-r-gray-400 border-2 border-solid border-b-gray-400 flex justify-center items-center m-6 text-red-500 font-semibold'>Photography</div>
                        <div className='w-72 h-16 border-r-gray-400 border-2 border-solid border-b-gray-400 flex justify-center items-center m-6 text-red-500 font-semibold'>Catering</div>
                        <div className='w-72 h-16 border-r-gray-400 border-2 border-solid border-b-gray-400 flex justify-center items-center m-6 text-red-500 font-semibold'>Promotions</div>




                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
