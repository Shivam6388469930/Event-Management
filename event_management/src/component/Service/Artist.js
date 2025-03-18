import React from 'react'

const Artist = () => {
    return (
        <div>
            <div className='d-flex justify-around h-96'>
                <div className='d-flex justify-center items-center w-[40%] h-full'>
                    <p className='  font-bold' style={ { fontSize: "4rem" } }>Artist Acquistionss</p>
                </div>
                <div className='d-flex justify-center items-center w-[60%] h-full'>
                    <p className=' font-bold' style={ { fontSize: "2rem" } }>
                        Working on connecting the gap between the corporates and the celebrities. Our extended team in Mumbai is responsible for acquiring Bollywood celebrities and artists for occasions like product launch, inaugurations and live shows.</p>
                </div>
            </div>
            <div className='d-flex justify-center h-[70vh]'>
                <img src="services/artist.jpg"alt="" srcset="" style={ { width: "100%", height: "100%" } } />
            </div>
            <div>
                <p className=' font-bold' style={ { fontSize: "1.5rem" } }>We specialize in acquiring exceptional artists and performers to elevate your events to new heights.</p>
            </div>
            <div className='m-3'>
                <div className='d-flex flex-col justify-around'>
                    <p class="desc1 mt-4 text-xl">  <strong style={{fontSize:"2rem", fontWeight:"bolder"}}>Musical Performances: </strong> From renowned bands and solo artists to enchanting vocalists and mesmerizing instrumentalists, we have a wide network of musical talent across genres. Whether you're looking for a lively band to ignite the dance floor or a soulful singer to create an intimate atmosphere, we connect you with the perfect musical performers that align with your event's theme and audience preferences.</p>

                    <p class="desc1 mt-4  text-xl">  <strong style={{fontSize:"2rem", fontWeight:"bolder"}}>Dance and Theatrical Performances:</strong>  Experience the magic of captivating dance and theatrical performances through our artist acquisitions. We collaborate with talented dancers, choreographers, and theater groups to bring dynamic and visually stunning performances to your event. Whether it's contemporary dance, traditional cultural performances, or theatrical productions, our acquisitions add a touch of elegance and artistry to any stage.</p>

                    <p class="desc1 mt-4  text-xl">  <strong style={{fontSize:"2rem", fontWeight:"bolder"}}>Visual and Fine Arts:</strong> Immerse your guests in the world of visual and fine arts with our artist acquisitions. We work with talented painters, sculptors, and other visual artists to showcase their stunning creations at your event. From live art demonstrations and interactive installations to curated exhibitions, our visual arts acquisitions create a visually captivating and immersive experience for attendees.</p>

                    <p class="desc1 mt-4">  <strong style={{fontSize:"2rem", fontWeight:"bolder"}}>Speakers and Thought Leaders:</strong>   Engage and inspire your audience with impactful speakers and thought leaders. We connect you with renowned industry experts, motivational speakers, and thought-provoking influencers who can deliver compelling keynote speeches, panel discussions, and workshops. Our speaker acquisitions ensure that your event leaves a lasting impact by delivering valuable insights and empowering messages.</p>

                    <p class="desc1 mt-4  text-xl">  <strong style={{fontSize:"2rem", fontWeight:"bolder"}}>Specialty Acts and Performers:</strong>Looking for unique and captivating entertainment options? Our artist acquisitions include a variety of specialty acts and performers that add a touch of flair and excitement to your event. From acrobats and magicians to fire dancers and aerialists, we bring extraordinary talent that creates memorable moments and keeps your guests in awe.</p>

                    <p class="desc1 mt-4  text-xl">We understand the importance of selecting the right artists who align with your event's theme, audience, and objectives.

                        If you're ready to elevate your event with stellar talent, contact us today. Let us handle the artist acquisitions, ensuring that your stage comes alive with captivating performances that leave a lasting impression on your guests. Together, we'll create an event that exceeds expectations and delivers an unforgettable artistic experience.</p>
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

export default Artist
