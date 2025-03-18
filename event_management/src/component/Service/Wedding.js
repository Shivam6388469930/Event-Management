import React from 'react'

const Wedding = () => {
  return (
    <div>
       <div className='d-flex justify-around h-96'>
                <div className='d-flex justify-center items-center w-[40%] h-full '>
                    <p className='  font-bold' style={ { fontSize: "4rem" } }>Wedding</p>
                </div>
                <div className='d-flex justify-center items-center w-[60%] h-full '>
                    <p className=' font-bold' style={ { fontSize: "2rem" } }>
                        A daily routine for our creative minds joining for brain storming sessions and creating out of the box ideas which are always appreciated by our clients. These concepts are used as a backdrop of all events and promotions.</p>
                </div>
            </div>
            <div className='d-flex justify-center h-[70vh]'>
                <img src="services/wedding.jpg" alt="" srcset="" style={ { width: "100%", height: "100%" } } />
            </div>
            <div>
                <p className=' font-bold' style={ { fontSize: "1.5rem" } }>At CS Entertainment, we thrive on creativity and innovation. This is the place where ideas take flight and where we shape the blueprint for unforgettable experiences. Our team of seasoned event professionals is here to collaborate with you, transforming your vision into a captivating reality.

                    Step into our Ideation Hub and explore a world of limitless possibilities. Whether it's a corporate gala, a grand wedding, or a themed extravaganza, we're here to brainstorm, conceptualize, and bring your event to life in ways you never imagined.

                    From immersive themes to cutting-edge technology, from unique venues to jaw-dropping entertainment, our ideation process is fueled by imagination and tailored to your specific needs. We delve deep into the details, crafting every element to perfection, ensuring that your event stands out from the crowd.

                    Leave no idea unexplored, no concept unimagined. Together, we'll create a remarkable event that captivates, inspires, and leaves a lasting impression. Get ready to embark on an ideation journey like no other.

                    Let's collaborate, innovate, and make your event dreams a reality. Welcome to our Ideation Hub!"</p>
            </div>
            <div className='m-3'>
                <h1 className=' font-bold' style={ { fontSize: "2.5rem" } }>Here's how our ideation process works:</h1>
                <div className='d-flex flex-col justify-around'>
                <p><span style={{fontSize:"2rem", fontWeight:"bolder"}}>Discovery:</span> We start by getting to know you and your event goals. We'll delve into your ideas, themes, and desired outcomes to gain a deep understanding of what you envision.</p>

                    <p><span style={{fontSize:"2rem", fontWeight:"bolder"}}>Brainstorming:</span> Our creative minds come together to brainstorm fresh and innovative concepts that align perfectly with your event's essence. We explore unique themes, captivating experiences, and cutting-edge elements to set your event apart.</p>

                    <p><span style={{fontSize:"2rem", fontWeight:"bolder"}}>Concept Development:</span> Building on the ideas generated, we craft a comprehensive event concept that captures the spirit of your occasion. We carefully curate each element, from decor and entertainment to logistics and guest engagement, to ensure a cohesive and unforgettable experience.</p>

                    <p><span style={{fontSize:"2rem", fontWeight:"bolder"}}>Collaboration:</span> We believe in collaborative ideation, and your input is invaluable. We'll present our concepts to you, inviting your feedback and ideas to fine-tune the vision until it's exactly what you've dreamed of.</p>

                    <p><span style={{fontSize:"2rem", fontWeight:"bolder"}}>Presentation:</span> Once we've refined the concept, we'll present you with a visual representation of the event's design, along with detailed plans and timelines. This gives you a glimpse of what your event will look like and assures you that we're on the right track.</p>

                    <p><span style={{fontSize:"2rem", fontWeight:"bolder"}}>Finalization: </span>After incorporating your feedback and making necessary adjustments, we finalize the event concept and move forward with planning and execution, bringing the masterpiece to life.</p>
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

export default Wedding

